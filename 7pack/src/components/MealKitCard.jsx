import PropTypes from "prop-types";
import "./MealKitCard.scss";

const MealKitCard = (props) => {
  const { mealKit, } = props;
  const { imageUrl, title, price } = mealKit;

  return (
    <div className="meal-kit-card">
      <div
        className="card-header"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      >
      </div>
      <div className="card-footer">
        <div className="price-block">
          <h2>{title}</h2>
          <p>Nuo {price} / d. (su pristatymu)</p>
        </div>
      </div>
    </div>
  );
};

MealKitCard.propTypes = {
  mealKit: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    mealCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  handlePlusClick: PropTypes.func.isRequired,
};

export default MealKitCard;
