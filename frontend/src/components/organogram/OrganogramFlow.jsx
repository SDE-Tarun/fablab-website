import {
  ReactFlow,
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

import {
  useMemo,
} from "react";

import OrganogramNode from "./OrganogramNode";

const nodeTypes = {
  customNode:
    OrganogramNode,
};

const OrganogramFlow = ({
  members,
}) => {
  const {
    nodes,
    edges,
  } = useMemo(() => {
    const generatedNodes =
      [];

    const generatedEdges =
      [];

    members.forEach(
      (
        member,
        index
      ) => {
        generatedNodes.push({
          id: member._id,

          type:
            "customNode",

          position: {
            x: 300,
            y:
              index *
              180,
          },

          data: {
            name:
              member.name,
            designation:
              member.designation,
            image:
              member.image,
          },
        });

        if (
          member.parent
        ) {
          generatedEdges.push({
            id: `${member.parent}-${member._id}`,

            source:
              member.parent,

            target:
              member._id,

            animated: true,
          });
        }
      });

    return {
      nodes:
        generatedNodes,
      edges:
        generatedEdges,
    };
  }, [members]);

  return (
    <div
      className="
      w-full
      h-[900px]
      rounded-xl
      overflow-hidden
      "
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={
          nodeTypes
        }
        fitView
      >
        <Background />

        <Controls />
      </ReactFlow>
    </div>
  );
};

export default OrganogramFlow;