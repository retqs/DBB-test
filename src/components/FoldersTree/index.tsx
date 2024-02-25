import { useQuery } from "react-query";

import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";
import { ViewContent } from "components/ViewContent";
import { getFoldersdata } from "requests";

const dummyData = {
  id: 285,
  folderName: "Folder",
  depth: 0,
  current: true,
  children: [
    {
      id: 317,
      folderName: "Folder deeper",
      depth: 1,
      current: false,
      children: [
        {
          id: 320,
          folderName: "File",
          depth: 2,
          current: false,
          children: [],
        },
      ],
    },
    {
      id: 318,
      folderName: "Folder 2",
      depth: 1,
      current: false,
      children: [],
    },
    {
      id: 319,
      folderName: "Folder 3",
      depth: 1,
      current: false,
      children: [],
    },
  ],
};

const TreeNode = ({ node }: { node: any }) => {
  const hasChildren = !!node.children.length;

  const label = hasChildren ? (
    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
      {node.depth !== 0 && (
        <Chip
          size="small"
          color="warning"
          sx={{ mr: 1 }}
          label={`${node.depth}`}
        />
      )}
      {node.folderName}
      {node.current && <StarIcon color="warning" sx={{ ml: 1 }} />}
    </Box>
  ) : (
    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
      {node.depth !== 0 && (
        <Chip
          size="small"
          color="warning"
          sx={{ mr: 1 }}
          label={` ${node.depth}`}
        />
      )}
      {node.folderName}
      {node.current && <StarIcon color="warning" sx={{ ml: 1 }} />}
    </Box>
  );

  return (
    <TreeItem key={node.id} nodeId={`${node.id}`} label={label}>
      {hasChildren
        ? node.children.map((node: any) => (
            <TreeNode key={node.id} node={node} />
          ))
        : null}
    </TreeItem>
  );
};

const extractIds = (data: any, idsArray = []) => {
  if (data && Array.isArray(data)) {
    data.forEach((item) => {
      if (item.id) {
        // @ts-expect-error
        idsArray.push(`${item.id}`);
      }
      if (item.children && Array.isArray(item.children)) {
        extractIds(item.children, idsArray);
      }
    });
  }
  return idsArray;
};

export const FoldersTree = () => {
  const {
    data: foldersTreeData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["folders"],
    queryFn: getFoldersdata,
  });

  // Since I have CORS error, in normal environment
  // here we'd pass our request's state
  return (
    <Box>
      <ViewContent
        // data={foldersTreeData}
        // isLoading={isLoading}
        // isError={isError}
        data={dummyData}
        isLoading={false}
        isError={false}
      >
        {(data: any) => {
          const defaultExpanded = extractIds([data]);
          return (
            <TreeView
              aria-label="user referral"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              defaultExpanded={defaultExpanded}
            >
              <TreeNode node={data} />
            </TreeView>
          );
        }}
      </ViewContent>
    </Box>
  );
};
