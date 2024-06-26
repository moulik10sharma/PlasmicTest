// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x3xc855ARAT9pieN1px2uC
// Component: jkWmGZysDCLq
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  set as $stateSet,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import TextInput from "../../TextInput"; // plasmic-import: 7RxYTt11e4j3/component
import Select from "../../Select"; // plasmic-import: lTPzv6PQJv77/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../website_starter/plasmic.module.css"; // plasmic-import: x3xc855ARAT9pieN1px2uC/projectcss
import sty from "./PlasmicDocList.module.css"; // plasmic-import: jkWmGZysDCLq/css

createPlasmicElementProxy;

export const PlasmicDocList__VariantProps = new Array();

export const PlasmicDocList__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDocList__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "data",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          {
            name: "Dr. John Doe",
            hospital: "City Hospital",
            department: "Cardiology",
            position: "Cardiologist",
            city: "New York"
          },
          {
            name: "Dr. Jane Smith",
            hospital: "Metro Hospital",
            department: "Neurology",
            position: "Neurologist",
            city: "Los Angeles"
          },
          {
            name: "Dr. Alice Johnson",
            hospital: "General Hospital",
            department: "Pediatrics",
            position: "Pediatrician",
            city: "Chicago"
          },
          {
            name: "Dr. Emily Clark",
            hospital: "City Hospital",
            department: "Dermatology",
            position: "Dermatologist",
            city: "New York"
          },
          {
            name: "Dr. Michael Brown",
            hospital: "Metro Hospital",
            department: "Orthopedics",
            position: "Orthopedic Surgeon",
            city: "Los Angeles"
          }
        ]
      },
      {
        path: "searchTerm",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "dropDown",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "selectedColumn",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "filteredData",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "selectedHospital",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__u0E2L)}>
            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              onChange={async (...eventArgs) => {
                ((...eventArgs) => {
                  generateStateOnChangeProp($state, ["textInput", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }).apply(null, eventArgs);
                (async event => {
                  const $steps = {};
                  $steps["updateSearchTerm"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["searchTerm"]
                          },
                          operation: 0,
                          value: $state.textInput.value
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;
                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateSearchTerm"] != null &&
                    typeof $steps["updateSearchTerm"] === "object" &&
                    typeof $steps["updateSearchTerm"].then === "function"
                  ) {
                    $steps["updateSearchTerm"] = await $steps[
                      "updateSearchTerm"
                    ];
                  }
                }).apply(null, eventArgs);
              }}
              value={
                generateStateValueProp($state, ["textInput", "value"]) ?? ""
              }
            />

            <Select
              data-plasmic-name={"select"}
              data-plasmic-override={overrides.select}
              className={classNames("__wab_instance", sty.select)}
              onChange={async (...eventArgs) => {
                ((...eventArgs) => {
                  generateStateOnChangeProp($state, ["select", "value"])(
                    eventArgs[0]
                  );
                }).apply(null, eventArgs);
                (async value => {
                  const $steps = {};
                  $steps["updateDropDown"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["dropDown"]
                          },
                          operation: 0,
                          value: $state.select.value
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;
                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateDropDown"] != null &&
                    typeof $steps["updateDropDown"] === "object" &&
                    typeof $steps["updateDropDown"].then === "function"
                  ) {
                    $steps["updateDropDown"] = await $steps["updateDropDown"];
                  }
                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return console.log($state.dropDown);
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["runCode"] != null &&
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await $steps["runCode"];
                  }
                  $steps["updateSelectedHospital"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["selectedHospital"]
                          },
                          operation: 0,
                          value: $state.select.value
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;
                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateSelectedHospital"] != null &&
                    typeof $steps["updateSelectedHospital"] === "object" &&
                    typeof $steps["updateSelectedHospital"].then === "function"
                  ) {
                    $steps["updateSelectedHospital"] = await $steps[
                      "updateSelectedHospital"
                    ];
                  }
                }).apply(null, eventArgs);
              }}
              options={(() => {
                const __composite = [
                  { value: null },
                  { value: null },
                  { value: null }
                ];

                __composite["0"]["value"] = "City Hospital";
                __composite["1"]["value"] = "Metro Hospital";
                __composite["2"]["value"] = "General Hospital";
                return __composite;
              })()}
              value={generateStateValueProp($state, ["select", "value"])}
            />
          </div>
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return (() => {
                  return $state.data.filter(item => {
                    const matchesHospital = $state.selectedHospital
                      ? item.hospital === $state.selectedHospital
                      : true;
                    const matchesSearchTerm = $state.searchTerm
                      ? item.name.includes($state.searchTerm)
                      : true;
                    return matchesHospital && matchesSearchTerm;
                  });
                })();
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()
          ).map((__plasmic_item_0, __plasmic_idx_0) => {
            const currentItem = __plasmic_item_0;
            const currentIndex = __plasmic_idx_0;
            return (
              <div
                className={classNames(projectcss.all, sty.freeBox___6Jrw)}
                key={currentIndex}
              >
                <div className={classNames(projectcss.all, sty.freeBox__c9FrY)}>
                  <div
                    data-plasmic-name={"name"}
                    data-plasmic-override={overrides.name}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.name
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.name;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Name";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    data-plasmic-name={"name2"}
                    data-plasmic-override={overrides.name2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.name2
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.hospital;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Hospital";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    data-plasmic-name={"name3"}
                    data-plasmic-override={overrides.name3}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.name3
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.department;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Department";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    data-plasmic-name={"name4"}
                    data-plasmic-override={overrides.name4}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.name4
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.position;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Name";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    data-plasmic-name={"name5"}
                    data-plasmic-override={overrides.name5}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.name5
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.city;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Name";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "textInput",
    "select",
    "name",
    "name2",
    "name3",
    "name4",
    "name5"
  ],

  textInput: ["textInput"],
  select: ["select"],
  name: ["name"],
  name2: ["name2"],
  name3: ["name3"],
  name4: ["name4"],
  name5: ["name5"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDocList__ArgProps,
          internalVariantPropNames: PlasmicDocList__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDocList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocList";
  } else {
    func.displayName = `PlasmicDocList.${nodeName}`;
  }
  return func;
}

export const PlasmicDocList = Object.assign(
  // Top-level PlasmicDocList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    select: makeNodeComponent("select"),
    _name: makeNodeComponent("name"),
    name2: makeNodeComponent("name2"),
    name3: makeNodeComponent("name3"),
    name4: makeNodeComponent("name4"),
    name5: makeNodeComponent("name5"),
    // Metadata about props expected for PlasmicDocList
    internalVariantProps: PlasmicDocList__VariantProps,
    internalArgProps: PlasmicDocList__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDocList;
/* prettier-ignore-end */
