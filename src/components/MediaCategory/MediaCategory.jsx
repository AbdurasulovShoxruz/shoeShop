import './MediaCategory.scss'

function MediaCategory({ inputHandler }) {
    return (
      <div className="mediaCategory">
        <button onClick={(e) => inputHandler(e)} name="category" value="all">
          All
        </button>
        <button onClick={(e) => inputHandler(e)} name="category" value="running">
          Running
        </button>
        <button onClick={(e) => inputHandler(e)} name="category" value="outdoor">
          Outdoor
        </button>
        <button onClick={(e) => inputHandler(e)} name="category" value="gym">
          Gym
        </button>
        <button onClick={(e) => inputHandler(e)} name="category" value="tennis">
          Tennis
        </button>
      </div>
    );
  }

  export default MediaCategory;