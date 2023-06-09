function initMainMenu() {
  const topLevelNav = document.getElementsByClassName("js-topLevelNav");
  const subLevelNav = document.getElementsByClassName("js-subLevelNav");
  [...topLevelNav].forEach((navEl) => new TopMenuItem(navEl, topLevelNav));
  [...subLevelNav].forEach((subNavEl) => new SubMenuItem(subNavEl));
}

class MenuItem {
  constructor(el, allElements = null) {
    this.el = el;
    this.allElements = allElements;
    this.el.addEventListener("click", this);
  }

  handleEvent(event) {
    console.log("event", event);
  }
}

class SubMenuItem extends MenuItem {
  constructor(...args) {
    super(...args);
  }

  handleEvent() {
    event.stopPropagation();
    alert(event.target.innerText);
  }
}

class TopMenuItem extends MenuItem {
  constructor(...args) {
    super(...args);
  }

  ACTIVE_CLASS = "is-active";

  handleEvent(event) {
    this.toggleActiveClass(event);
  }

  addActiveClass() {
    this.el.classList.add(this.ACTIVE_CLASS);
  }

  removeActiveClass() {
    [...this.allElements].forEach((navEl) => {
      navEl.classList.remove(this.ACTIVE_CLASS);
    });
  }

  toggleActiveClass() {
    if (this.el.classList.contains(this.ACTIVE_CLASS)) {
      this.removeActiveClass();
    } else {
      this.removeActiveClass();
      this.addActiveClass();
    }
  }
}

(() => initMainMenu())();
