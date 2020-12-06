let mainApp = angular.module("mainApp", [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol("[{");
    $interpolateProvider.endSymbol("}]");
});

mainApp.controller('marksController', function ($scope) {
    $scope.student = {
        firstName: "Иван",
        lastName: "Петров",

        subjects: [
            {
                subjectTitle: 'Программирование на языке Python',
                teacher: 'Гарафутдинов Р.В.',
                examDate: '26.12.2020',
                examMark: 7
            },
            {
                subjectTitle: 'Web-программирование',
                teacher: 'Кузнецов Д.Б.',
                examDate: '17.01.2021',
                examMark: 10
            },
            {
                subjectTitle: 'Компонентно-ориентированное программирование',
                teacher: 'Ланин В.В.',
                examDate: '21.01.2021',
                examMark: 8
            },
            {
                subjectTitle: 'Разработка и анализ требований',
                teacher: 'Викентьева О.Л.',
                examDate: '27.01.2021',
                examMark: 9
            },
            {
                subjectTitle: 'Технологии анализа данных в Internet',
                teacher: 'Ланин В.В.',
                examDate: '02.02.2021',
                examMark: 10
            }
        ],

        fullName: function () {
            let studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };

    $scope.orderByDate = function (item) {
        let parts = item.examDate.split('.');
        return new Date(parseInt(parts[2]), parseInt(parts[1]), parseInt(parts[0]));
    };
});
