import "./header.css";
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand fw-bold" href="/#">
            OBSU<span>PS</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown me-lg-4">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  التصنيفات
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/#">
                      اجهزة الكومبيوتر
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      الجوالات
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      الملابس
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      other
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-lg-4">
                <a class="nav-link " aria-current="page" href="/">
                  العروض
                </a>
              </li>
              <li class="nav-item me-lg-4">
                <a class="nav-link " href="/">
                  ما الجديد
                </a>
              </li>
              <li class="nav-item me-lg-4">
                <a class="nav-link " aria-current="page" href="/about">
                  من نحن
                </a>
              </li>
              <li class="nav-item me-lg-4">
                <a class="nav-link " href="/#">
                  اتصل بنا
                </a>
              </li>
            </ul>
            <form class=" d-none d-lg-flex" role="search">
              <input
                class="f-control me-2"
                type="search"
                placeholder="ابحث عن منتج"
                aria-label="Search"
              ></input>
              <i class="fa-solid fa-magnifying-glass"></i>
            </form>
            <div class="user me-5">
              <i class="fa-regular fa-user"></i>
              حسابي
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
