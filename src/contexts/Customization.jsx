import { createContext, useContext, useState } from "react";

export const HeadphoneColors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [HeadphoneCol, setHeadphoneColor] = useState(HeadphoneColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        HeadphoneColors,
        HeadphoneCol,
        setHeadphoneColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
};