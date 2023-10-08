import { HeadphoneColors, useCustomization } from "../contexts/Customization";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Configurator = () => {
    const { HeadphoneCol, setHeadphoneColor} = useCustomization();
    return (
        <div className="configurator__section">
        <div className="configurator__section__title">Select your color:</div>
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
        <div>
      <button onClick={handleClick} className="button-with-icon">
      <FontAwesomeIcon icon={faCartShopping} className="icon" /> Add to Cart
    </button>
    </div>
      </div>
    )
}

function handleClick() {
// Get the .item--active element
//const activeItem = document.querySelector('.item--active');

// Get the .item__dot element within the .item--active element
//const itemDot = activeItem.querySelector('.item__dot');

// Get the id attribute of the .item__dot element
//const dotId = itemDot.getAttribute('id');

// Log the id attribute to the console
//console.log('ID of the .item__dot within .item--active:', dotId);
}

export default Configurator;