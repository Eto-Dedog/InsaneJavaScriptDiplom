const loadData = () => {
    const navListPopupRepair = document.querySelector('.nav-list-popup-repair'),
      contentTable = document.querySelector('.popup-repair-types-content-table'),
      popupSection = document.querySelector('.popup-dialog-repair-types');
    let repairTypes = new Set(),
      repairArr = [];
    fetch('db/db.json')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('status network not 200!');
        }
        return response.json();
      })
      .then(data => rendering(data))
      .catch((error) => console.error('Ошибка запроса: ', error));
  
    const changeTableTitle = (text) => {
      const tableTitle = document.getElementById('switch-inner');
      tableTitle.textContent = text;
    }
    const renderNavList = () => {
      [...repairTypes].forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'button_o popup-repair-types-nav__item';
        btn.textContent = item;
        if (index === 0) {
          btn.classList.add('active');
          changeTableTitle(item);
        }
        navListPopupRepair.append(btn);
        renderContentTable(repairArr.filter(repairArr => repairArr.type === item));
      })
      contentTable.children[0].classList.add('active');
    }
    const renderContentTable = (currArr) => {
      const table = document.createElement('table');
      table.classList.add('popup-repair-types-content-table__list');
      const tbody = document.createElement('tbody');
      currArr.forEach(({ name, units, cost }, index) => {
        const tr = document.createElement('tr');
        tr.className = 'mobile-row showHide';
        tr.innerHTML =
          `
          <td class="repair-types-name">${name}</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
          <td class="repair-types-value">${units}</sup></td>
          <td class="repair-types-value">${cost} руб.</td>
        `;
        tbody.append(tr);
      })
      table.append(tbody);
      contentTable.append(table);
    }
    const rendering = (data) => {
      repairArr = data;
      data.forEach(item => repairTypes.add(item.type));
      renderNavList();
    }
  };
export default loadData