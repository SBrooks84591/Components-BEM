class Dropdown {
    constructor(element) {
<<<<<<< HEAD
      this.element = element;
      this.button = this.element.querySelector(".Dropdown__button");
  
      this.button.addEventListener("click", () => {
        this.toggleContent();
      });
    }
  
    toggleContent() {
      this.element.classList.toggle("Dropdown--active");
    }
  }
  
  let dropdowns = document.querySelectorAll(".Dropdown");
  dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
=======
        this.element = element;
        this.button = this.element.querySelector(".Dropdown__button");

        this.button.addEventListner("click", () => {
            this.toggleContent();
        });
    }
}

toggleContent() {
    this.element.classList.toggle("DropDown--active");
}

let dropdowns = document.querySelectorAll(".Dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
>>>>>>> f5d742a054db865922f99644f05c77fed754a4b2
