(function (global) {

    var dc = {};
    
    var homeHtml = "../snippets/home-snippet.html";
    var categoryHtml = "../snippets/category-snippet.html";
    var allCategories = "../data/categories.json";
    var categoriesTitleHtml = "../snippets/category-title-snippet.html";

    var insertHtml = function (selector, html) {
      var targetElem = document.querySelector(selector);
      targetElem.innerHTML = html;
    };

    var insertProperty = function (string, propName, propValue) {
      var propToReplace = "{{" + propName + "}}";
      string = string
        .replace(new RegExp(propToReplace, "g"), propValue);
      return string;
    }
  
    document.addEventListener("DOMContentLoaded", function (event) {
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        document.querySelector("#home-page")
          .innerHTML = responseText;
      },
      false);
    });

    dc.loadMenuCategories = function () {
      $ajaxUtils.sendGetRequest(
        allCategories,
        buildAndShowCategoriesHTML);
    };
    
    function buildAndShowCategoriesHTML (categories) {
      $ajaxUtils.sendGetRequest(
        categoriesTitleHtml,
        function (categoriesTitleHtml) {
          $ajaxUtils.sendGetRequest(
            categoryHtml,
            function (categoryHtml) {
              var categoriesViewHtml =
                buildCategoriesViewHtml(categories,
                                        categoriesTitleHtml,
                                        categoryHtml);
              insertHtml("#menu-page", categoriesViewHtml);
            },
            false);
        },
        false);
    }

    function buildCategoriesViewHtml(categories,
      categoriesTitleHtml,
      categoryHtml) {

    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";

    for (var i = 0; i < categories.length; i++) {
    var html = categoryHtml;
    var name = "" + categories[i].name;
    html = insertProperty(html, "name", name);
    finalHtml += html;
    }

    finalHtml += "</section>";
    return finalHtml;
    }
    
    global.$dc = dc;
    
    })(window);