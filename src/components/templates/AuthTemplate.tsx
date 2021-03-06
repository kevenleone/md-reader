import ClayLabel from "@clayui/label";
import ClayLayout from "@clayui/layout";
import classNames from "classnames";
import React from "react";

import useLang from "@/hooks/useLang";

interface AuthProps {
  children: React.ReactElement;
  className?: string;
}

const AuthTemplate: React.FC = ({ children, className }: AuthProps) => {
  const i18n = useLang();

  const frontendVersion = process.env.NEXT_PUBLIC_PACKAGE_VERSION;

  return (
    <div className={classNames("sign__in", className)}>
      <ClayLayout.Row justify="start" className="signin__row">
        <ClayLayout.Col
          size={4}
          sm={6}
          lg={4}
          className="signin__col signin__main"
        >
          <ClayLayout.ContainerFluid view>
            <ClayLayout.Row justify="center">
              <ClayLayout.Col xl={8} lg={10}>
                {children}
                <div className="signin__footer">
                  <p>{i18n.get("copyright")}</p>
                  <p>{i18n.get("terms-of-use")}</p>
                  <hr />
                  <ClayLabel displayType="info">
                    {i18n.sub("x-version-x", ["Frontend", frontendVersion])}
                  </ClayLabel>
                </div>
              </ClayLayout.Col>
            </ClayLayout.Row>
          </ClayLayout.ContainerFluid>
        </ClayLayout.Col>
        <ClayLayout.Col className="signin__col signin__background" />
      </ClayLayout.Row>
    </div>
  );
};

export default AuthTemplate;
