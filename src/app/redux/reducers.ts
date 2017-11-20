// generate a unique id....
import { ValueCache } from 'ag-grid/dist/lib/valueService/valueCache';
function generateUUID () {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function populate(state) {
  return state;
}

const initialState = populate({
  statestatus: {
    isDirty: false
  },
  modelheader: {
    filename: 'emptyModel.json',
    author: '',
    description: 'This is an empty model template.',
    creatDate: '11/30/2017',
    updateDate: '11/30/2017'
  },
  decision: {
    ModelType: 'how'
  },
  settings: {
    Country: 'United States',
    Language: 'english',
    DiscountRateOutcomes: 3,
    DiscountRateCosts: 3,
    ModelTimeframe: 20,
    ModelTimeframeUnits: 'years',
    CycleLength: 1,
    CycleLengthUnits: 'years',
    CycleCount: 20
  },
  groupinfo: {
    PopulationType: 'heterogeneous'
  },
  groups: [],
  strategieswho: [],
  strategieshow: [],
  transitions: [],
  states: [],
  formulas: [],
  values_health: [],
  values_economic: [],
  summaries_health: [],
  summaries_economic: [],
  tables: [],
  scripts: [],
  overrides: [],
  bc_results: {
    trace: [],
    outcomes: [],
    costs: [],
    ce: []
  }
});

function ensureValidState(state: any) {
  const intial = JSON.parse(JSON.stringify(initialState));
  const keys = Object.keys(intial);
  keys.forEach(key => {
    if (!state[key]) {
      state[key] = intial[key];
    }
  });
  return state;
}

export function rootReducer(state: any = initialState, action: any): any {
    state = ensureValidState(JSON.parse(JSON.stringify(state)));
    const actions = {
      LOAD_MODEL: () => {
        // just do it...
        return action.payload.state;
      },
      RESET_DIRTY: () => {
        // mark it not 'dirty'...
        state.statestatus.isDirty = false;
        // do the update...
        return state;
      },
      UPDATE_DECISION: () => {
        state.decision.ModelType = action.payload.ModelType;
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      UPDATE_SETTINGS: () => {
        state.settings.Country = action.payload.Country;
        state.settings.Language = action.payload.Language;
        state.settings.DiscountRateOutcomes = action.payload.DiscountRateOutcomes;
        state.settings.DiscountRateCosts = action.payload.DiscountRateCosts;
        state.settings.ModelTimeframe = action.payload.ModelTimeframe;
        state.settings.ModelTimeframeUnits = action.payload.ModelTimeframeUnits;
        state.settings.CycleLength = action.payload.CycleLength;
        state.settings.CycleLengthUnits = action.payload.CycleLengthUnits;
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // group methods... UPDATE_GROUPS
      UPDATE_GROUPS: () => {
        state.groupinfo.PopulationType = action.payload.PopulationType;
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // group methods... ADD_GROUP
      ADD_GROUP: () => {
        action.payload.id = generateUUID();
        state.groups.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // group methods... ADD_GROUP_ATTRIB
      ADD_GROUP_ATTRIB: () => {
        state.groups.forEach((group, i) => {
          group[action.payload] = null;
          if (typeof group.groupAttributes !== undefined) {
            group.groupAttributes.push({
              name: action.payload
            })
          }
        })
        console.log('RETURNING STATE', state);
        return state;
      },
      // group methods... REMOVE_GROUP_ATTRIB
      REMOVE_GROUP_ATTRIB: () => {
        state.groups.forEach((group, i) => {
          if (typeof group.groupAttributes !== undefined) {
            group.groupAttributes.splice(action.payload, 1)
          }
        })
        console.log('RETURNING STATE', state);
        return state;
      },
      // group methods... RENAME_GROUP_ATTRIB
      RENAME_GROUP_ATTRIB: () => {
        state.groups.forEach((group) => {
          var originalAttribValue;
          if (typeof group.groupAttributes !== undefined) {
            group.groupAttributes.forEach((attrib, i) => {
              if (i === action.payload.i) {
                originalAttribValue = {name: attrib.name, value: attrib.value};
                attrib.name = action.payload.v;
              }
            })
          }
          var copyValue = group[originalAttribValue.name]
          group[action.payload.v] = copyValue;
          delete group[originalAttribValue.name];
        })
        console.log('RETURNING STATE', state);
        return state;
      },
      // group methods... INSERT_GROUP
      INSERT_GROUP: () => {
          action.payload[0].id = generateUUID();
          state.groups.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // group methods... REMOVE_GROUP
      REMOVE_GROUP: () => {
        const index = state.groups
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the group name before delete...
            const goneName = state.groups[index].name;
            state.groups.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // group methods... EDIT_GROUP
      EDIT_GROUP: () => {
        const index = state.groups
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
          const oldName = state.groups[index].name;
          state.groups[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // group methods... ARRANGE_GROUP
      ARRANGE_GROUPS: () => {
        const stateIds = state.groups.map(d => d.id);
        state.groups = action.payload.map(
            d => state.groups[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // transition methods... ADD_TRANSITION
      ADD_TRANSITION: () => {
        action.payload.id = generateUUID();
        state.transitions.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // transition methods... INSERT_TRANSITION
      INSERT_TRANSITION: () => {
        action.payload[0].id = generateUUID();
        state.transitions.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // transition methods... REMOVE_TRANSITION
      REMOVE_TRANSITION: () => {
        const index = state.transitions
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the state name before delete...
            const goneName = state.transitions[index].name;
            state.transitions.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // transition methods... EDIT_TRANSITION
      EDIT_TRANSITION: () => {
        const index = state.transitions
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
            state.transitions[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // transition methods... ARRANGE_TRANSITIONS
      ARRANGE_TRANSITIONS: () => {
        const stateIds = state.transitions.map(d => d.id);
        state.transitions = action.payload.map(
            d => state.transitions[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // state methods... ADD_STATE
      ADD_STATE: () => {
        action.payload.id = generateUUID();
        state.states.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // state methods... INSERT_STATE
      INSERT_STATE: () => {
        action.payload[0].id = generateUUID();
        state.states.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // state methods... REMOVE_STATE
      REMOVE_STATE: () => {
        const index = state.states
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the state name before delete...
            const goneName = state.states[index].name;
            state.states.splice(index, 1);
            // Remove transitions to/from state
            state.transitions = state.transitions
                  .filter(transit => transit.from !== goneName)
                  .filter(transit => transit.to !== goneName);

            // Remove any health values that use removed state, then
            // remove any health summaries that use those removed values
            state.values_health = state.values_health
                .filter(value => value.state !== goneName);
            const hvalueslist = state.values_health.map(x => x.name);
            state.summaries_health = state.summaries_health
                .filter(summ => hvalueslist.indexOf(summ.value) !== -1);

            // Remove any economic values that use removed state, then
            // remove any economic summaries that use those removed values
            state.values_economic = state.values_economic
                .filter(value => value.state !== goneName);
            const evalueslist = state.values_economic.map(x => x.name);
            state.summaries_economic = state.summaries_economic
                .filter(summ => evalueslist.indexOf(summ.value) !== -1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // state methods... EDIT_STATE
      EDIT_STATE: () => {
        const index = state.states
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
          const oldName = state.states[index].name;
          state.states[index] = action.payload;
          // If named change, we need to update the name elsewhere
          if (oldName !== action.payload.name) {
              // Rename transitions
              state.transitions.map(transition => {
                  if (transition.from === oldName) {
                      transition.from = action.payload.name;
                  }
                  if (transition.to === oldName) {
                      transition.to = action.payload.name;
                  }
                  return transition;
              });
              // Rename Values
              state.values_health.map(value => {
                  if (value.state === oldName) {
                    value.state = action.payload.name;
                  }
                  return value;
              });
              state.values_economic.map(value => {
                  if (value.state === oldName) {
                    value.state = action.payload.name;
                  }
                  return value;
              });
          }
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // state methods... ARRANGE_STATES
      ARRANGE_STATES: () => {
        const stateIds = state.states.map(d => d.id);
        state.states = action.payload.map(
            d => state.states[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... ADD_STRATEGY_WHO
      ADD_STRATEGY_WHO: () => {
        action.payload.id = generateUUID();
        state.strategieswho.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... ADD_STRATEGY_HOW
      ADD_STRATEGY_HOW: () => {
        action.payload.id = generateUUID();
        state.strategieshow.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... INSERT_STRATEGY_WHO
      INSERT_STRATEGY_WHO: () => {
        action.payload[0].id = generateUUID();
        state.strategieswho.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... INSERT_STRATEGY_HOW
      INSERT_STRATEGY_HOW: () => {
        action.payload[0].id = generateUUID();
        state.strategieshow.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... REMOVE_STRATEGY_WHO
      REMOVE_STRATEGY_WHO: () => {
        const index = state.strategieswho
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the state name before delete...
            const goneName = state.strategieswho[index].name;
            state.strategieswho.splice(index, 1);
            // Remove transitions to/from state
            state.transitions = state.transitions
              .filter(transit => transit.strategy !== goneName);

            // Remove any health values that use removed strat, then
            // remove any health summaries that use those removed values
            state.values_health = state.values_health
                .filter(value => value.strategy !== goneName);
            const hvalueslist = state.values_health.map(x => x.name);
            state.summaries_health = state.summaries_health
                .filter(summ => hvalueslist.indexOf(summ.value) !== -1);

            // Remove any economic values that use removed strat, then
            // remove any economic summaries that use those removed values
            state.values_economic = state.values_economic
                .filter(value => value.strategy !== goneName);
            const evalueslist = state.values_economic.map(x => x.name);
            state.summaries_economic = state.summaries_economic
                .filter(summ => evalueslist.indexOf(summ.value) !== -1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... REMOVE_STRATEGY_HOW
      REMOVE_STRATEGY_HOW: () => {
        const index = state.strategieshow
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the state name before delete...
            const goneName = state.strategieshow[index].name;
            state.strategieshow.splice(index, 1);
            // Remove transitions to/from state
            state.transitions = state.transitions
              .filter(transit => transit.strategy !== goneName);

            // Remove any health values that use removed strat, then
            // remove any health summaries that use those removed values
            state.values_health = state.values_health
                .filter(value => value.strategy !== goneName);
            const hvalueslist = state.values_health.map(x => x.name);
            state.summaries_health = state.summaries_health
                .filter(summ => hvalueslist.indexOf(summ.value) !== -1);

            // Remove any economic values that use removed strat, then
            // remove any economic summaries that use those removed values
            state.values_economic = state.values_economic
                .filter(value => value.strategy !== goneName);
            const evalueslist = state.values_economic.map(x => x.name);
            state.summaries_economic = state.summaries_economic
                .filter(summ => evalueslist.indexOf(summ.value) !== -1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... EDIT_STRATEGY_WHO
      EDIT_STRATEGY_WHO: () => {
        const index = state.strategieswho
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
          const oldName = state.strategieswho[index].name;
          state.strategieswho[index] = action.payload;
          // If named change, we need to update the name elsewhere
          if (oldName !== action.payload.name) {
              // Rename transitions
                state.transitions.map(transition => {
                  if (transition.strategy === oldName) {
                      transition.strategy = action.payload.name;
                  }
                  return transition;
              });
              // Rename Values
              state.values_health.map(value => {
                  if (value.strategy === oldName) {
                    value.strategy = action.payload.name;
                  }
                  return value;
              });
              state.values_economic.map(value => {
                  if (value.strategy === oldName) {
                    value.strategy = action.payload.name;
                  }
                  return value;
              });
          }
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... EDIT_STRATEGY_HOW
      EDIT_STRATEGY_HOW: () => {
        const index = state.strategieshow
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
            const oldName = state.strategieshow[index].name;
            state.strategieshow[index] = action.payload;
            // If named change, we need to update the name elsewhere
            if (oldName !== action.payload.name) {
                // Rename transitions
                state.transitions.map(transition => {
                    if (transition.strategy === oldName) {
                        transition.strategy = action.payload.name;
                    }
                    return transition;
                });
                // Rename Values
                state.values_health.map(value => {
                    if (value.strategy === oldName) {
                      value.strategy = action.payload.name;
                    }
                    return value;
                });
                state.values_economic.map(value => {
                    if (value.strategy === oldName) {
                      value.strategy = action.payload.name;
                    }
                    return value;
                });
            }
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... ARRANGE_STRATEGIES_WHO
      ARRANGE_STRATEGIES_WHO: () => {
        const stateIds = state.strategieswho.map(d => d.id);
        state.strategieswho = action.payload.map(
            d => state.strategieswho[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // strategies methods... ARRANGE_STRATEGIES_HOW
      ARRANGE_STRATEGIES_HOW: () => {
        const stateIds = state.strategieshow.map(d => d.id);
        state.strategieshow = action.payload.map(
            d => state.strategieshow[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // formula methods... ADD_FORMULA
      ADD_FORMULA: () => {
        action.payload.id = generateUUID();
        state.formulas.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // formula methods... INSERT_FORMULA
      INSERT_FORMULA: () => {
        action.payload[0].id = generateUUID();
        state.formulas.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // formula methods... REMOVE_FORMULA
      REMOVE_FORMULA: () => {
        const index = state.formulas
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the formula name before delete...
            const goneName = state.formulas[index].name;
            state.formulas.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // formula methods... EDIT_FORMULA
      EDIT_FORMULA: () => {
        const index = state.formulas
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
          const oldName = state.formulas[index].name;
          state.formulas[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // formula methods... ARRANGE_FORMULA
      ARRANGE_FORMULAS: () => {
        const stateIds = state.formulas.map(d => d.id);
        state.formulas = action.payload.map(
            d => state.formulas[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_health methods... ADD_VALUES_HEALTH
      ADD_VALUES_HEALTH: () => {
        action.payload.id = generateUUID();
        state.values_health.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_health methods... INSERT_VALUES_HEALTH
      INSERT_VALUES_HEALTH: () => {
        action.payload[0].id = generateUUID();
        state.values_health.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_health methods... REMOVE_VALUES_HEALTH
      REMOVE_VALUES_HEALTH: () => {
        const index = state.values_health
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the values_health name before delete...
            const goneName = state.values_health[index].name;
            state.values_health.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_health methods... EDIT_VALUES_HEALTH
      EDIT_VALUES_HEALTH: () => {
        const index = state.values_health
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
          const oldName = state.values_health[index].name;
          state.values_health[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_health methods... ARRANGE_VALUES_HEALTH
      ARRANGE_VALUES_HEALTH: () => {
        const stateIds = state.values_health.map(d => d.id);
        state.values_health = action.payload.map(
            d => state.values_health[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_economic methods... ADD_VALUES_ECONOMIC
      ADD_VALUES_ECONOMIC: () => {
        action.payload.id = generateUUID();
        state.values_economic.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_economic methods... INSERT_VALUES_ECONOMIC
      INSERT_VALUES_ECONOMIC: () => {
        action.payload[0].id = generateUUID();
        state.values_economic.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_economic methods... REMOVE_VALUES_ECONOMIC
      REMOVE_VALUES_ECONOMIC: () => {
        const index = state.values_economic
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the values_economic name before delete...
            const goneName = state.values_economic[index].name;
            state.values_economic.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_economic methods... EDIT_VALUES_ECONOMIC
      EDIT_VALUES_ECONOMIC: () => {
        const index = state.values_economic
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
          const oldName = state.values_economic[index].name;
          state.values_economic[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // values_economic methods... ARRANGE_VALUES_ECONOMIC
      ARRANGE_VALUES_ECONOMIC: () => {
        const stateIds = state.values_economic.map(d => d.id);
        state.values_economic = action.payload.map(
            d => state.values_economic[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_health methods... ADD_SUMMARIES_HEALTH
      ADD_SUMMARIES_HEALTH: () => {
        action.payload.id = generateUUID();
        state.summaries_health.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_health methods... INSERT_SUMMARIES_HEALTH
      INSERT_SUMMARIES_HEALTH: () => {
        action.payload[0].id = generateUUID();
        state.summaries_health.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_health methods... REMOVE_SUMMARIES_HEALTH
      REMOVE_SUMMARIES_HEALTH: () => {
        const index = state.summaries_health
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the summaries_health name before delete...
            const goneName = state.summaries_health[index].name;
            state.summaries_health.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_health methods... EDIT_SUMMARIES_HEALTH
      EDIT_SUMMARIES_HEALTH: () => {
        const index = state.summaries_health
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
          const oldName = state.summaries_health[index].name;
          state.summaries_health[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_health methods... ARRANGE_SUMMARIES_HEALTH
      ARRANGE_SUMMARIES_HEALTH: () => {
        const stateIds = state.summaries_health.map(d => d.id);
        state.summaries_health = action.payload.map(
            d => state.summaries_health[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_economic methods... ADD_SUMMARIES_ECONOMIC
      ADD_SUMMARIES_ECONOMIC: () => {
        action.payload.id = generateUUID();
        state.summaries_economic.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_economic methods... INSERT_SUMMARIES_ECONOMIC
      INSERT_SUMMARIES_ECONOMIC: () => {
        action.payload[0].id = generateUUID();
        state.summaries_economic.splice(action.payload[1], 0, action.payload[0]);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_economic methods... REMOVE_SUMMARIES_ECONOMIC
      REMOVE_SUMMARIES_ECONOMIC: () => {
        const index = state.summaries_economic
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            // save the summaries_economic name before delete...
            const goneName = state.summaries_economic[index].name;
            state.summaries_economic.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_economic methods... EDIT_SUMMARIES_ECONOMIC
      EDIT_SUMMARIES_ECONOMIC: () => {
        const index = state.summaries_economic
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
          const oldName = state.summaries_economic[index].name;
          state.summaries_economic[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      // summaries_economic methods... ARRANGE_SUMMARIES_ECONOMIC
      ARRANGE_SUMMARIES_ECONOMIC: () => {
        const stateIds = state.summaries_economic.map(d => d.id);
        state.summaries_economic = action.payload.map(
            d => state.summaries_economic[stateIds.indexOf(d)]
        );
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      ADD_TABLE: () => {
        action.payload.id = generateUUID();
        state.tables.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      REMOVE_TABLE: () => {
        const index = state.tables
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            state.tables.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      EDIT_TABLE: () => {
        const index = state.tables
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
            state.tables[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      ADD_SCRIPT: () => {
        action.payload.id = generateUUID();
        state.scripts.push(action.payload);
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      EDIT_SCRIPT: () => {
        const index = state.scripts
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
            state.scripts[index] = action.payload;
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      REMOVE_SCRIPT: () => {
        const index = state.scripts
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            state.scripts.splice(index, 1);
        }
        // mark it 'dirty'...
        state.statestatus.isDirty = true;
        // do the update...
        return state;
      },
      ADD_OVERRIDE: () => {
        action.payload.id = generateUUID();
        if (state.overrides) {
          // Check if formula exists
          const index = state.formulas
              .map(x => x.name)
              .indexOf(action.payload.name);
          if (index !== -1) {
            state.overrides.push(action.payload);
            // mark it 'dirty'...
            state.statestatus.isDirty = true;
          }
        } else {
          state.overrides = [
            action.payload
          ];
          // mark it 'dirty'...
          state.statestatus.isDirty = true;
          return state;
        }
      },
      REMOVE_OVERRIDE: () => {
        const index = state.overrides
            .map(d => d.id)
            .indexOf(action.payload);
        if (index !== -1) {
            state.overrides.splice(index, 1);
            // mark it 'dirty'...
            state.statestatus.isDirty = true;
        }
      return state;
      },
      EDIT_OVERRIDE: () => {
        const index = state.overrides
            .map(d => d.id)
            .indexOf(action.payload.id);
        if (index !== -1) {
            state.overrides[index] = action.payload;
            // mark it 'dirty'...
            state.statestatus.isDirty = true;
        }
        return state;
      },
      UPDATE_OVERRIDES: () => {
        const overrides = [];
        action.payload.forEach(override => {
          const index = state.formulas
              .map(x => x.name)
              .indexOf(override.name);
          if (index !== -1) {
            if (!override.id) {
              override.id = generateUUID();
            }
            overrides.push(override);
          }
        });
        state.statestatus.isDirty = true;
        state.overrides = overrides;
        return state;
      },
      UPDATE_RESULTS: () => {
        state.bc_results = action.payload;
        state.statestatus.isDirty = true;
        return state;
      },
      CLEAR_RESULTS: () => {
        state.bc_results = undefined;
        state.statestatus.isDirty = true;
        return state;
      }
    };

    const fun = actions[action.type];
    if (fun) {
      state = ensureValidState(populate(fun()));
    }
    return state;
}
