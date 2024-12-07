import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import type { FunctionComponent } from "react";
import { isHttpErrorStatus } from "~/utils/errors";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const errorStatus = Number(params.status);

  if (!isHttpErrorStatus(errorStatus)) {
    return redirect("/error/404/");
  }

  return errorStatus;
};

const Index: FunctionComponent = () => {
  const data = useLoaderData<typeof loader>();
  return <div>{`${data.toString()}エラーだよ`}</div>;
};

export default Index;
