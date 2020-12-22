import "./main-item.css";

function MainItem() {
  return (
    <main
      role="main"
      class="col-md-9 ml-sm-auto col-lg-10 px-5 pb-3 d-flex flex-column flex-grow-1"
    >
      {/* <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary dropdown-toggle"
          >
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div> */}

      {/* <h2>Section title</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm"></table>
      </div> */}

      <div class="first-row row bg-primary">
        <div class="col">1 of 2</div>
      </div>

      <div class="row flex-grow-1 my-5">
        <div class="col bg-success mr-3 ">1 of 2</div>
        <div class="col bg-info mx-3">1 of 2</div>
        <div class="col bg-secondary mx-3">1 of 2</div>
        <div class="col bg-danger ml-3">1 of 2</div>
      </div>

      <div class='last-row row bg-warning'>
        
      </div>

    </main>
  );
}

export default MainItem;
