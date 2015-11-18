/**
 * Created by sergey on 01.11.15.
 */


export class InitDatabaseRepository {

  public createCategories() {

    let categories: Array<any> = [
      {
        id: 1,
        name: 'Овощи',
        keyName: 'vegetables'
      }, {
        id: 2,
        name: 'Фрукты и ягоды',
        keyName: 'fruit'
      }, {
        id: 3,
        name: 'Грибы',
        keyName: 'mushrooms'
      }, {
        id: 4,
        name: 'Яйца и молочные продукты',
        keyName: 'eggs'
      }, {
        id: 5,
        name: 'Мясные продукты',
        keyName: 'meat'
      }, {
        id: 6,
        name: 'Рыба и морепродукты',
        keyName: 'fish'
      }, {
        id: 7,
        name: 'Орехи и сухофрукты',
        keyName: 'nuts'
      }, {
        id: 8,
        name: 'Мука и мучные изделия',
        keyName: 'baking'
      }, {
        id: 9,
        name: 'Крупы и каши',
        keyName: 'cereals'
      }, {
        id: 10,
        name: 'Кондитерские изделия',
        keyName: 'confectionery'
      }, {
        id: 11,
        name: 'Специи и пряности',
        keyName: 'spices',
      }, {
        id: 12,
        name: 'Безалкогольные напитки',
        keyName: 'softDrinks'
      }, {
        id: 13,
        name: 'Алкогольные напитки',
        keyName: 'alcohol'
      }, {
        id: 14,
        name: 'Сырье и добавки',
        keyName: 'rawMaterials'
      }
    ];

    let i: number;

    for(i = 0; i < categories.length; i = i + 1) {
      window.kart.db.put({
          _id: 'category'+ i,
          categoryName: categories[i].name,
          keyName: categories[i].keyName,
          type: 'category'
      });
    }

  }

  public createProducts() {

  }


}
