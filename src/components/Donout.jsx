import { Card, DonutChart, Title, List, ListItem } from "@tremor/react"
import { useState } from "react";

import { HardwareOSC } from "../services/hardware"

export const DonutChartUsageExample2 = () => {
  const [value, setValue] = useState(null);

  const Sistemas = HardwareOSC()

  return (
    <>
      <Card className="flex w-[540px] gap-4 justify-around" >
        <section>
          <Title>Sistemas Operativos</Title>
          <DonutChart
            className="mt-6"
            data={Sistemas}
            category="count"
            index="name"
            colors={["pink", "cyan", "amber", "purple"]}
            onValueChange={(v) => setValue(v)}
          />
        </section>

        <section className="flex flex-col justify-between">
          <Title>Detallado Sistemas</Title>
          <List>
            {Sistemas.map((item, index) => (
              <ListItem key={index}>
                <p className="font-semibold text-white pr-4"><span>{item.name}</span></p>
                <p className="font-semibold text-white pr-4"><span>{item.count}</span></p>
              </ListItem>
            ))}
          </List>
        </section>
      </Card>
    </>
  );
};
