import { Card, DonutChart, Title, List, ListItem } from "@tremor/react"
import { useState } from "react";
const systems = [
  {
    name: "Windows",
    acount: 22,
  },
  {
    name: "Mac-OS",
    acount: 15,
  },
  {
    name: "Linux",
    acount: 30,
  },
  {
    name: "Android",
    acount: 20,
  }
];

export const DonutChartUsageExample2 = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <Card className="flex w-[520px] gap-4 justify-around">
        <section>
          <Title>Sistemas Operativos</Title>
          <DonutChart
            className="mt-6"
            data={systems}
            category="acount"
            index="name"
            colors={["blue", "gray", "red", "yellow"]}
            onValueChange={(v) => setValue(v)}
          />
        </section>

        <section>
          <Title>Detallado Sistemas</Title>
          <List>
            {systems.map((item) => (
              <ListItem key={item.city}>
                <p><span>{item.name}</span></p>
                <p><span>{item.acount}</span></p>
              </ListItem>
            ))}
          </List>
        </section>
      </Card>
    </>
  );
};
