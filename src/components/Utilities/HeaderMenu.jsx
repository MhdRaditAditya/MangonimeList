const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h3 className="dark:text-color-primary text-color-secondary md:text-2xl text-lg p-8 ">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
