const navbarContent = [
    {
     title: "О НАС",
     link:"about/"
    },
    {
     title: "КАТАЛОГ",
     link:"catalog/"
    },
    {
     title: "НАШИ РАБОТЫ",
     link:"works/"
    },
    {
     title: "КОНТАКТЫ",
     link:"contacts"
    } ]
  
  const navbar = document.querySelector(".navbar")
  navbarContent.forEach((item) => {
  const linkEl = document.createElement("a")
  linkEl.textContent = item.title
  linkEl.setAttribute("href",`/${item}/link`)
    navbar.append(linkEl)
  })
  
    
  const tableObj = {
      table1: {
          quantity: ['Количество', '5-10', '11-20', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
          price: ['Цена', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом']
      },
      table2: {
          quantity: ['Количество', '5-10', '11-20', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
          price: ['Цена', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом']
      },
      table3: {
          quantity: ['Количество', '5-10', '11-20', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
          price: ['Цена', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом', '2000 сом']
      }
    }
    //элементы таблицы
  
    const tableWrapper = document.querySelector('.tableWrapper')
    
    const tableMaker = (tableData) => {
      const table = document.createElement('table')//создаем таблицу
    table.classList.add('table')
      const tableHead = document.createElement('thead') //создаем хэдер таблицу
      const tableHeadTitle = document.createElement('th') //создаем заголовок
      tableHeadTitle.classList.add('th')
      tableHeadTitle.textContent = 'Худи стандарт'
      tableHead.append(tableHeadTitle) //вставляем заголовок в хэдер
    
      const tableBody = document.createElement('tbody') //создаем тело таблицы
    for(const row in tableData){ //определяем количество рядов
       
      const tableRow = document.createElement('tr') //создаем ряд
      tableRow.classList.add('tr')
      tableData[row].forEach((item) =>{
          const tableCell = document.createElement('td') //создаем ячейку
          tableCell.textContent = item //присваиваем ее к массиву
          tableRow.append(tableCell) //вставляем ячейку в ряд
      })
      tableBody.append(tableRow) //вставляем ряд в тело таблицы
    }
      table.append(tableHead) //добавляем в таблицу хэдер
      table.append(tableBody) //добавляем в таблицу тело
    
      tableWrapper.append(table) 
    } //заполнение таблицы
    for (const key in tableObj){
      tableMaker(tableObj[key]) 
    }
    //заполнение таблицы
  