const Shimmer = () => {
  return (
    <div className="shimmer-parent">
      {Array(9)
        .fill("")
        .map((e, index) => (
          <div className="card-shimmer" key={index}>
            <div className="restaurant-img-shimmer"></div>
            <div className="card-details-shimmer">
              <div className="restaurant-details-shimmer"></div>
              <div className="restaurant-details-shimmer"></div>
              <div className="restaurant-details-shimmer"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
