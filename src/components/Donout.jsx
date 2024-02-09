import { Card, DonutChart, Title, List, ListItem } from "@tremor/react"
import { useState } from "react";
const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

export const DonutChartUsageExample2 = () => {
  const [value, setValue] = useState(null);

  return (
    <section className="flex">
      <Card className="w-96">
        <Title>Sistemas Operativos</Title>
        <DonutChart
          className="mt-6"
          data={cities}
          category="sales"
          index="name"
          colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
          onValueChange={(v) => setValue(v)}
        />

        <Title>Tremor Hometowns</Title>
        <List>
          {cities.map((item) => (
            <ListItem key={item.city}>
              <p><span>{item.city}</span></p>
              <p><span>{item.rating}</span></p>
            </ListItem>
          ))}
        </List>
      </Card>
    </section>
  );  
};
