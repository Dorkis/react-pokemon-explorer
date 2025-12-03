import classes from "./style.module.css";

export default function Form() {

  function handleSearch(e) {
    const text = e.target.value;
    if(text.length > 2) {
      
    }
  }

  return (
    <div className={classes.search}>
      <form>
        <input type='text' name='search' placeholder='Search Pokemon...' onChange={handleSearch}/>
      </form>
    </div>
  )
}