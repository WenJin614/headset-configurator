import { HeadphoneColors, useCustomization } from "../contexts/Customization";

const Configurator = () => {
    const { HeadphoneCol, setHeadphoneColor} = useCustomization();
    return (
        <div className="configurator__section">
        <div className="configurator__section__title">Headphone color</div>
        <div className="configurator__section__values">
          {HeadphoneColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === HeadphoneCol.color ? "item--active" : ""
              }`}
              onClick={() => setHeadphoneColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Configurator;