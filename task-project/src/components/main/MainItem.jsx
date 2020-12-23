import "./main-item.css";
import CardItem from './CardItem'
function MainItem(props) {
  return (
    <main
      role="main"
      class="col-md-9 ml-sm-auto col-lg-10 px-5 pb-3 d-flex flex-column flex-grow-1"
    >

      <div class="first-row row bg-primary">
        <div class="col">1 of 2</div>
      </div>

      <CardItem />

      <div class="last-row row bg-warning"></div>
    </main>
  );
}

export default MainItem;
