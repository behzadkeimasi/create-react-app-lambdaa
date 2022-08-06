import React from 'react'
import './App.css';

function App() {
  return (
    <div className="body">
      <TopSection />
    </div>
  );
}

function TopSection() {
  return (
    <div id="topsection" className="container d-flex flex-column justify-content-between align-items-center">
      <Header />
      <MobileMenu />
      <Hero />
      <Slider />
    </div>
  );
}

function Header() {
  return (
    <div id="header-container" className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex flex-row-reverse align-items-center">
          <ButtonSmall id="login" href="https://app.alopeyk.com//login" text="ورود" />
          <ButtonSmallOutline id="register" href="https://app.alopeyk.com/register" text="ثبت نام" />
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <Navbar />
          <div>
            <img id="logo" src="images/logo.svg" alt="logo"></img>
            <img id="menu-icon" src="images/menu icon.svg" alt="menu icon" onClick={() => mobileMenuOpen()}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div id="mobile-menu-container" className="d-flex flex-column align-items-center">
      <div className="container">
        <div id="mobile-menu" className="container">
          <div className="d-flex justify-content-between">
            <img src="images/white logo.svg" alt="logo"></img>
            <img src="images/close.svg" alt="close" onClick={() => mobileMenuClose()}></img>
          </div>
          <div>
            <nav id="mobile-menu-nav" className="navbar d-flex justify-content-center">
              <ul className="navbar-nav d-flex flex-column-reverse align-items-center">
                <MobileMenuItem href="https://new.alopeyk.com/contact-us" text="تماس با ما" />
                <MobileMenuItem href="https://help.alopeyk.com/fa" text="آموزش" />
                <MobileMenuItem href="https://new.alopeyk.com/couriers" text="ثبت نام سفیران" />
                <MobileMenuItem href="https://new.alopeyk.com/business" text="کسب‌وکارها" />
                <MobileSubMenu />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-sm">
      <ul className="navbar-nav">
        <NavItem href="https://new.alopeyk.com/contact-us" text="تماس با ما" />
        <NavItem href="https://help.alopeyk.com/fa" text="آموزش" />
        <NavItem href="https://new.alopeyk.com/couriers" text="ثبت نام سفیران" />
        <NavItem href="https://new.alopeyk.com/business" text="کسب‌وکارها" />
        <SubMenu />
      </ul>
    </nav>
  );
}

function SubMenu() {
  return (
    <li id="servicessubmenu" className="nav-item d-flex flex-column align-items-end">
      <span className="nav-link">
        <img src="images/arrow-down.svg" alt="arrow down"></img>
        خدمات
      </span>
      <nav className="navbar submenu">
        <ul className="navbar-nav d-flex flex-column submenunav">
          <SubMenuItem href="https://new.alopeyk.com/services/alopeyk" text="الوپیک" img="images/arrow left.svg" icon="images/small lozenge.svg" />
          <SubMenuItem href="https://new.alopeyk.com/services/alotaxi" text="الوتاکسی" img="images/arrow left.svg" icon="images/small lozenge.svg" />
          <SubMenuItem href="https://new.alopeyk.com/services/alovanet" text="الووانت" img="images/arrow left.svg" icon="images/small lozenge.svg" />
          <SubMenuItem href="https://new.alopeyk.com/services/alopost" text="الوپست" img="images/arrow left.svg" icon="images/small lozenge.svg" />
          <SubMenuItem href="https://new.alopeyk.com/services/alocod" text="الوفروش" img="images/arrow left.svg" icon="images/small lozenge.svg" />
          <SubMenuItem href="https://new.alopeyk.com/services/bulk" text="سفارش انبوه" img="images/arrow left.svg" icon="images/small lozenge.svg" />
        </ul>
      </nav>
    </li>
  );
}

function MobileSubMenu() {
  return (
    <li className="nav-item mobile-menu-item">
      <span className="mobile-menu-link" onClick={() => mobileSubMenu()}>
        <img id="mobile-submenu-icon" src="/images/white arrow down.svg" alt="submenu"></img>
        خدمات
      </span>
      <nav id="mobile-submenu-nav" className="navbar">
        <ul className="navbar-nav d-flex flex-column align-items-center">
          <MobileSubMenuItem href="https://new.alopeyk.com/services/alopeyk" text="الوپیک" />
          <MobileSubMenuItem href="https://new.alopeyk.com/services/alotaxi" text="الوتاکسی" />
          <MobileSubMenuItem href="https://new.alopeyk.com/services/alovanet" text="الووانت" />
          <MobileSubMenuItem href="https://new.alopeyk.com/services/alopost" text="الوپست" />
          <MobileSubMenuItem href="https://new.alopeyk.com/services/alocod" text="الوفروش" />
          <MobileSubMenuItem href="https://new.alopeyk.com/services/bulk" text="سفارش انبوه" />
        </ul>
      </nav>
    </li>
  );
}

function Hero() {
  return (
    <div id="hero-section" className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-7 col-lg">
          <img id="heroimg" src="https://new.alopeyk.com/_nuxt/image/9575c5.webp" alt="service" />
        </div>
        <div className="col-md-5 col-lg d-flex flex-column align-items-center">
          <H1 id="hero-text" text="سریع ارسال کنید" />
          <H3 id="hero-description" text="با پیک موتوری مرسوله‌ها را به آسانی به مقصد برسانید" />
          <ButtonLarge id="hero-button" href="#" text="ثبت درخواست" />
          <ButtonText id="herobuttontext" textId="hero-buttontext" href="#" text="درباره الوپیک بیشتر بدانید" src="images/arrow-left.svg" />
        </div>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div id="slider-section" className="container d-flex flex-column align-items-center">
      <div id="pointerdiv-container">
        <div id="pointerdiv" className="d-flex flex-row-reverse justify-content-around">
          <img id="pointer1" src="images/pointer.svg" alt="pointer"></img>
          <img id="pointer2" src="images/pointer.svg" alt="pointer"></img>
          <img id="pointer3" src="images/pointer.svg" alt="pointer"></img>
          <img id="pointer4" src="images/pointer.svg" alt="pointer"></img>
          <img id="pointer5" src="images/pointer.svg" alt="pointer"></img>
          <img id="pointer6" src="images/pointer.svg" alt="pointer"></img>
        </div>
      </div>
      <div className="slider-container d-flex justify-content-center">
        <div className="slider d-flex flex-row-reverse align-items-center">
          <SliderItem id="slideritem1" img="images/alopeyk.svg" imgwhite="images/alopeyk-white.svg" text="الوپیک" />
          <SliderItem id="slideritem2" img="images/alotaxi.svg" imgwhite="images/alotaxi-white.svg"text="الوتاکسی" />
          <SliderItem id="slideritem3" img="images/alovanet.svg" imgwhite="images/alovanet-white.svg"text="الووانت" />
          <SliderItem id="slideritem4" img="images/alopost.svg" imgwhite="images/alopost-white.svg"text="الوپست" />
          <SliderItem id="slideritem5" img="images/alocod.svg" imgwhite="images/alocod-white.svg"text="الوفروش" />
          <div id="slideritem6" className="slideritem" onClick={() => { sliderSelect(6); timer(); }}>
            <div id="slideritem6-content" className="d-flex flex-column justify-content-center align-items-center">
              <img id="imgslideritem6" src="images/bulk.svg" alt="service icon"></img>
              <img id="imgwhiteslideritem6" src="images/bulk-white.svg" alt="service icon white"></img>
              <p>سفارش انبوه</p>
            </div>
            <div id="business-tag" className="d-flex justify-content-center align-items-center">
              <img src="/images/lozenge.svg" alt="shape"></img>
              <p id="business-tag-text">کسب‌ <br />وکار</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderItem(props) {
  return (
    <div id={props.id} className="slideritem" onClick={() => { sliderSelect(parseInt(props.id.charAt(10))); timer(); }}>
      <img id={"img" + props.id} src={props.img} alt="service icon"></img>
      <img id={"imgwhite" + props.id} src={props.imgwhite} alt="service icon white"></img>
      <p>{props.text}</p>
    </div>
  );
}

function NavItem(props) {
  return (
    <li id={props.id} className="nav-item navitem">
      <a className="nav-link" href={props.href}>
        {props.text}
      </a>
    </li>
  );
}

function SubMenuItem(props) {
  return (
    <li id={props.id} className="nav-item submenuitem">
      <a className="nav-link d-flex justify-content-between" href={props.href}>
        <img className="submenuitemimg" src={props.img} alt="submenu item icon"></img>
        <div className="d-flex">
          <p>{props.text}</p>
          <img src={props.icon} alt="shape"></img>
        </div>
      </a>
    </li>
  );
}

function MobileMenuItem(props) {
  return (
    <li id={props.id} className="nav-item mobile-menu-item">
      <a className="mobile-menu-link" href={props.href}>
        {props.text}
      </a>
    </li>
  );
}

function MobileSubMenuItem(props) {
  return (
    <li id={props.id} className="nav-item mobile-submenu-item">
      <a className="mobile-submenu-link" href={props.href}>{props.text}</a>
    </li>
  );
}

function H1(props) {
  return <h1 id={props.id} className="heading1">{props.text}</h1>;
}

function H3(props) {
  return <h3 id={props.id} className="heading3">{props.text}</h3>;
}

function ButtonLarge(props) {
  return <a id={props.id} className="buttonlarge" href={props.href}>{props.text}</a>;
}

function ButtonSmall(props) {
  return <a id={props.id} className="buttonsmall" href={props.href}>{props.text}</a>;
}

function ButtonSmallOutline(props) {
  return <a id={props.id} className="buttonsmalloutline" href={props.href}>{props.text}</a>;
}

function ButtonText(props) {
  return (
    <a id={props.id} className="buttontext d-flex flex-row align-items-center" href={props.href}>
      <img src={props.src} alt="button icon"></img>
      <p id={props.textId}>{props.text}</p>
    </a>
  );
}

window.onload = function () {
  for(let x=1;x<7;x++){
    document.getElementById("imgwhiteslideritem"+x).style.display="none";
  }
  sliderSelect(1);
  timer();
};

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    sliderSelect(1);
    timer();
  }
});

let slideTime, selectedItem = 1;

function timer() {
  clearInterval(slideTime);
  slideTime = setInterval(function () { sliderSelect(selectedItem < 6 ? selectedItem + 1 : 1) }, 4000);
}

const services = ["alopeyk", "alotaxi", "alovanet", "alopost", "alocod", "bulk"];
const servicesText = ["سریع ارسال کنید", "سریع به مقصد برسید", "بارها را جابجا کنید",
  "آنلاین پست کنید", "هزینه را در محل بگیرید", "انبوه و ارزان ارسال کنید"];
const servicesDescription = ["با پیک موتوری مرسوله‌ها را به آسانی به مقصد برسانید",
  "با تاکسی موتوری به سرعت از ترافیک شهری عبور کنید",
  "با وانت، بار‌های سنگین را آسان و مطمئن جا‌به‌جا کنید",
  "بدون مراجعه حضوری مرسوله‌های خود را پست کنید",
  "تحویل کالا و دریافت هزینه از مشتری را به ما بسپارید",
  "مرسوله‌های خود را یک جا، ارزان و سریع ارسال کنید"];
const servicesTitle = ["الوپیک", "الوتاکسی", "الووانت", "الوپست", "الوفروش", "سفارش انبوه"];
const sliderMobile = ["slideritem-selected", "slideritem-next1", "slideritem-next2",
  "slideritem-hide", "slideritem-pre2", "slideritem-pre1"];

function sliderSelect(item) {
 // document.getElementById("imgslideritem" + item).setAttribute("src", "images/" + services[item - 1] + "-white.svg");
  document.getElementById("imgwhiteslideritem"+item).style.display="block";
  document.getElementById("imgslideritem"+item).style.display="none";
  let select = document.getElementById("slideritem" + item);
  select.style.background = "linear-gradient(to bottom, #00B5FF, #04f 121%)";
  select.style.color = "#ffffff";
  document.getElementById("pointer" + item).style.visibility = "visible";
  if (item !== selectedItem) {
 //   document.getElementById("imgslideritem" + selectedItem).setAttribute("src", "images/" + services[selectedItem - 1] + ".svg");
    document.getElementById("imgslideritem"+selectedItem).style.display="block";
    document.getElementById("imgwhiteslideritem"+selectedItem).style.display="none";
    document.getElementById("heroimg").setAttribute("src", "images/" + services[item - 1] + ".webp");
    document.getElementById("hero-text").innerHTML = servicesText[item - 1];
    document.getElementById("hero-description").innerHTML = servicesDescription[item - 1];
    document.getElementById("hero-button").setAttribute("href",
      item < 6 ? "https://app.alopeyk.com/" + services[item - 1] + "/new" : "https://bulk.alopeyk.com");
    document.getElementById("hero-buttontext").innerHTML = "درباره " + servicesTitle[item - 1] + " بیشتر بدانید";
    document.getElementById("herobuttontext").setAttribute("href", "https://new.alopeyk.com/services/" + services[item - 1]);
    let selected = document.getElementById("slideritem" + selectedItem);
    selected.style.background = "#ffffff";
    selected.style.color = "#A0AAC0";
    document.getElementById("pointer" + selectedItem).style.visibility = "hidden";
  }
  if (window.innerWidth < 768) {
    let selectMobile = item;
    for (let counter = 0; counter < 6; counter++) {
      if (selectMobile === 7) selectMobile = 1;
      document.getElementById("slideritem" + selectMobile).setAttribute("class", "slideritem " + sliderMobile[counter]);
      selectMobile++;
    }
  }

  selectedItem = item;
}
let mobileMenuCounter = 0;
function mobileSubMenu() {
  mobileMenuCounter++;
  if (mobileMenuCounter % 2 === 1) {
    document.getElementById("mobile-submenu-nav").style.display = "flex";
    document.getElementById("mobile-submenu-icon").style.transform = "rotate(-180deg)";
  }
  else {
    document.getElementById("mobile-submenu-nav").style.display = "none";
    document.getElementById("mobile-submenu-icon").style.transform = "rotate(0)";
  }
}

function mobileMenuOpen() {
  document.getElementById("mobile-menu-container").style.visibility = "visible";
}

function mobileMenuClose() {
  document.getElementById("mobile-menu-container").style.visibility = "hidden";
  document.getElementById("mobile-submenu-nav").style.display = "none";
  document.getElementById("mobile-submenu-icon").style.transform = "rotate(0)";
}

export default App;
