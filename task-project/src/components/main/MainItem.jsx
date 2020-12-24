import "./main-item.css";
import CardItem from './CardItem'
import LastRow from './LastRow'
function MainItem(props) {
  return (
    <main
      role="main"
      className="col-md-9 ml-sm-auto col-lg-10 px-5 pb-3 d-flex flex-column flex-grow-1"
    >
      <div className="first-row row bg-primary">
        <div className="col">1 of 2</div>
      </div>

      <CardItem />

      <LastRow />
    </main>
  );
}

export default MainItem;
