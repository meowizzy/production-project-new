import React, { type ReactElement } from "react";

const jestEmptyComponent = function (): ReactElement {
    return <div className="mock-el" />;
};

export default jestEmptyComponent;