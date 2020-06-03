import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import NavigationRail from "..";
import { renderWithThemeProvider } from "../../../utils/renderWithThemeProvider";

describe("NavigationRail component testing", () => {
  afterEach(cleanup);

  test("NavigationRail", () => {
    const { asFragment } = renderWithThemeProvider(
      <NavigationRail.Container>
        <NavigationRail>
          <NavigationRail.Header>ここにロゴとかが入るよ</NavigationRail.Header>
          <NavigationRail.Content>
            <NavigationRail.ExpantionMenu
              title="設定"
              isActive={true}
              iconName="setting"
              expantionList={[
                <NavigationRail.ExpantionMenuItem
                  isActive={true}
                  title="デマンド設定"
                />,
              ]}
            />
            <NavigationRail.Menu
              title="ダッシュボード"
              isActive={false}
              iconName="dashboard"
            />
          </NavigationRail.Content>
          <NavigationRail.Footer>
            <NavigationRail.Fixture />
          </NavigationRail.Footer>
        </NavigationRail>
        <NavigationRail.MainContent>hogehoge</NavigationRail.MainContent>
      </NavigationRail.Container>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
