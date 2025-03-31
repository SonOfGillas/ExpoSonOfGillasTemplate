import { Redirect } from "expo-router";
import { AppRoutes } from "./shared/core/routes/routes_names";

export default function IndexPage () {
    return <Redirect href={AppRoutes.INITIAL_ROUTE} />;
};
