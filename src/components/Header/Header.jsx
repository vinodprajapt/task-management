import "./style.css";
function Header() {
  return (
    <header>
      <div className="header">
        <a href="#">
          <img
            className="logo"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt="logo"
          />
        </a>
        <h1 className="heading">Task Management </h1>
        <a href="#">
          <img
            className="logo"
            src="https://media.istockphoto.com/id/184122811/photo/handsome-businessman-wearing-a-name-tag-isolated.jpg?s=1024x1024&w=is&k=20&c=17E0JK8TuLIh_1wTGh9F7qsUrsdyu-ePsEWseyx-cXw="
            alt="logo"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
