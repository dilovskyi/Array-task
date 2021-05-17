// 1. Оставить в первом массиве те значений, которых нет во втором
let products1 = [
    {
        id: 7619,
        supplierCode: "BB5478",
        ean: null,
        name: "Gazelle Shoes",
        warnings: true,
    },
    {
        id: 7620,
        supplierCode: "DV2636",
        ean: null,
        name: "Trefoil Tights",
        warnings: true,
    },
    {
        id: 7621,
        supplierCode: "ED5959",
        ean: null,
        name: "3-Stripes Tee",
        warnings: false,
    },
    {
        id: 7622,
        supplierCode: "EJ9708",
        ean: null,
        name: "Manchester United Away Socks",
        warnings: false,
    },
    {
        id: 7623,
        supplierCode: "FM4289",
        ean: null,
        name: "Manchester United 20/21 Home Shorts",
        warnings: true,
    },
];

let products2 = [
    {
        id: 7621,
        supplierCode: "ED5959",
        ean: null,
        name: "3-Stripes Tee",
        warnings: false,
    },
    {
        id: 7622,
        supplierCode: "EJ9708",
        ean: null,
        name: "Manchester United Away Socks",
        warnings: false,
    },
    {
        id: 7623,
        supplierCode: "FM4289",
        ean: null,
        name: "Manchester United 20/21 Home Shorts",
        warnings: true,
    },
];

// Первый вариант
// let uniq = new Set();
// uniq.add(...products1)
// uniq.add(...products2)
// products1 = [...uniq]

//Второй вариант
products2.forEach(prod2 => {
    products1.forEach((prod1, index1) => {
        if (
            prod1.id === prod2.id &&
            prod1.supplierCode === prod2.supplierCode &&
            prod1.ean === prod2.ean &&
            prod1.name === prod2.name &&
            prod1.warnings === prod2.warnings
        ) {
            products1.splice(index1, 1);
        }

        // if (JSON.stringify(prod1) === JSON.stringify(prod2)) {
        //     products1.splice(index1, 1)
        // }
    });
});

// 2. Сохранив структуру и значения parent и children, увеличить значения массивов subChild на 1
// (Статично забивать значения нельзя)
let parent = {
    id: 7623,
    supplierCode: "FM4289",
    ean: null,
    name: "Manchester United 20/21 Home Shorts",
    warnings: true,
    children: [
        {
            id: 7624,
            subChild: [1, 2, 3, 4, 5],
        },
        {
            id: 7625,
            subChild: [5, 4, 3, 2, 1],
        },
    ],
};

for (let key in parent) {
    //Находим массив на верхнем уровне.
    if (Array.isArray(parent[key])) {
        parent[key].forEach(childrenElem => {
            //Делаем из обьекта массивы и "сглаживаем" их вложенность(Делаем одномерным). Итерируем.
            Object.entries(childrenElem)
                .flat()
                .forEach(item => {
                    //Находим массив children и его перебираем.
                    if (Array.isArray(item)) {
                        item.forEach((_, index) => {
                            item[index] += 1;
                        });
                    }
                });
        });
    }
}
