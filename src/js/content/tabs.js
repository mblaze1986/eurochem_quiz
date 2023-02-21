const allTabs = document.querySelectorAll(".tabs");

allTabs.forEach((tabs) => {
  let tabsHeads = tabs.querySelectorAll(".tabs__head");
  let tabsFields = tabs.querySelectorAll(".tabs__field");
  let activeTab = tabs.getAttribute("activeTab");
  let activeTabIndex = activeTab - 1;

  tabsHeads.forEach((head, headnum) => {
    head.setAttribute("tab-head", headnum + 1 + "tabAttr");
  });

  tabsFields.forEach((field, fieldNum) => {
    field.setAttribute("tab-field", fieldNum + 1 + "tabAttr");
  });

  if (activeTab < 1) {
    activeTabIndex = 0;
  } else if (activeTab > tabsHeads.length) {
    activeTabIndex = tabsHeads.length - 1;
  }

  if (tabs.hasAttribute("activeTab")) {
    tabsHeads[activeTabIndex].classList.add("active");
    tabsFields[activeTabIndex].classList.add("active");
  }

  let i = "";
  let j = "";


  for (i = 0; i < tabsHeads.length; i++) {
    tabsHeads[i].addEventListener("click", (headSwitch) => {
      headSwitch.preventDefault();

      for (j = 0; j < tabsHeads.length; j++) {
        let activeHeadAttr = headSwitch.target.getAttribute("tab-head");
        let fieldAttr = tabsFields[j].getAttribute("tab-field");

        if (activeHeadAttr === fieldAttr) {
          tabsHeads[j].classList.add("active");
          tabsFields[j].classList.add("active");
        } else {
          tabsHeads[j].classList.remove("active");
          tabsFields[j].classList.remove("active");
        }
      }
    });
  }
});
