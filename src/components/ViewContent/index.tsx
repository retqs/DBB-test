import { FC } from "react";

import { Loader } from "../Loader";
import { Title } from "../Title";
import { EmptyData } from "../EmptyData";

interface ViewContentProps {
  isLoading: boolean;
  isError: boolean;
  children: any;
  data: any;
}

// Reusable component for data rendering
export const ViewContent: FC<ViewContentProps> = ({
  isLoading,
  isError,
  data,
  children,
}) => {
  if (isLoading) return <Loader />;

  if (isError) return <Title>Error while loading data</Title>;

  if (!data || (data && !data.length && !data.id)) return <EmptyData />;

  return children(data);
};
