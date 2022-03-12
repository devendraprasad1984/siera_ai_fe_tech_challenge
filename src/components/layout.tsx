import React from "react";

type Props = {
    children: JSX.Element
}
const Layout: React.FC<Props> = (
    {children}
): JSX.Element => {
    return <div>
        {children}
    </div>
}
export default Layout