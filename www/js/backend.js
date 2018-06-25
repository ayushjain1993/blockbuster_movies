function trailSqlConn() {


    var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
    var msg;

    var radios = document.getElementsByName('revenue');
    var value;
    var year = document.getElementById('year').value;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio

            value = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    // https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/

    var yearInt = Number(year);
    var valueInt = Number(year);


    // http://www.tutorialspoint.com/html5/html5_web_sql.htm
    // https://dev.w3.org/html5/webdatabase/
    // https://cordova.apache.org/docs/en/latest/cordova/storage/storage.html

    // this block creates and adds data to the database
    db.transaction(function (tx) {
        tx.executeSql('DROP TABLE MOVIE');
        tx.executeSql('CREATE TABLE IF NOT EXISTS MOVIE (rank unique, title, revenue, year)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (1, "Avatar", 2787965087, 2009111)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (2, "Titanic", 2187463944, 1997)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (3, "Star Wars: The Force Awakens", 2068223624, 2015)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (4, "Avengers: Infinity War", 2021970014, 2018)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (5, "Jurassic World", 1671713208, 2015)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (6, "The Avengers", 1518812988, 2012)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (7,"Furious 7",1516045911,2015)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (8,"Avengers: Age of Ultron",1405403694,2015)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (9,"Black Panther" ,1346104018,2018)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (10,"Harry Potter and the Deathly Hallows – Part 2",1341511219,2011)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (11,"Star Wars: The Last Jedi",1332539889,2017)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (12,"Frozen",1290000000,2013)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (13,"Beauty and the Beast",1263521126,2017)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (14,"The Fate of the Furious",1238764765,2017)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (15,"Iron Man 3",1214811252,2013)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (16,"Minions",1159398397,2015)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (17,"Captain America: Civil War",1153304495,2016)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (18,"Transformers: Dark of the Moon",1123794079,2011)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (19,"The Lord of the Rings: The Return of the King",1120237002,2003)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (20,"Skyfall",1108561013,2012)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (21,"Transformers: Age of Extinction",1104054072,2014)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (22,"The Dark Knight Rises",1084939099,2012)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (23,"Toy Story 3",1066969703,2010)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (24,"Pirates of the Caribbean: Dead Man\'s Chest",1066179725,2006)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (25,"Rogue One: A Star Wars Story",1056057273,2016)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (26,"Pirates of the Caribbean: On Stranger Tides",1045713802,2011)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (27,"Despicable Me 3",1034799409,2017)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (28,"Jurassic Park",1029939903,1993)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (29,"Finding Dory",1028570889,2016)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (30,"Star Wars: Episode I – The Phantom Menace",1027044677,1999)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (31,"Alice in Wonderland",1025467110,2010)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (32,"Zootopia",1023784195,2016)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (33,"The Hobbit: An Unexpected Journey",1021103568,2012)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (34,"The Dark Knight",1004558444,2008)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (35,"Harry Potter and the Philosopher\'s Stone",974755371,2001)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (36,"Despicable Me 2",970761885,2013)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (37,"The Lion King",968483777,1994)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (38,"The Jungle Book",966550600,2016)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (39,"Pirates of the Caribbean: At World\'s End",963420425,2007)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (40,"Jumanji: Welcome to the Jungle",961952182,2017)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (41,"Harry Potter and the Deathly Hallows – Part 1",960283305,2010)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (42,"The Hobbit: The Desolation of Smaug",958366855,2013)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (43,"The Hobbit: The Battle of the Five Armies",956019788,2014)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (44,"Finding Nemo",940335536,2003)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (45,"Harry Potter and the Order of the Phoenix",939885929,2007)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (46,"Harry Potter and the Half-Blood Prince",934416487,2009)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (47,"The Lord of the Rings: The Two Towers",926349708,2002)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (48,"Shrek 2",919838758,2004)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (49,"Harry Potter and the Goblet of Fire",896911078,2005)');
        tx.executeSql('INSERT INTO MOVIE (rank , title, revenue, year) VALUES (50,"Spider-Man 3",890871626,2007)');

    })


    // this block retrieves the data from database based on the user's search criteria
    db.transaction(function (tx) {

            tx.executeSql('SELECT * FROM MOVIE WHERE year=?', [yearInt], function (tx, results) {
                var len = results.rows.length, i;
                msg = "<p>Found rows: " + len + "</p>";
                // document.querySelector('#status').innerHTML += msg;

                document.querySelector('#status').innerHTML = "<br/><b>Results:</b><br/><br/>";

                for (i = 0; i < len; i++) {
                    if (valueInt == 0) {
                        if (Number(results.rows.item(i).revenue) < 1000000000) {
                            msg = "<b>" + results.rows.item(i).rank + "</b> : " +
                                "<b>" + results.rows.item(i).title + "</b> : " +
                                "<b>$ " + results.rows.item(i).revenue + "</b> : " +
                                "<b>" + results.rows.item(i).year + "</b><br />";
                            document.querySelector('#status').innerHTML += msg;
                        }
                    } else if (value == 1) {
                        if ((results.rows.item(i).revenue >= 1000000000) && (results.rows.item(i).revenue <= 2000000000)) {
                            msg = "<b>" + results.rows.item(i).rank + "</b> : " +
                                "<b>" + results.rows.item(i).title + "</b> : " +
                                "<b>$ " + results.rows.item(i).revenue + "</b> : " +
                                "<b>" + results.rows.item(i).year + "</b><br />";
                            document.querySelector('#status').innerHTML += msg;
                        }
                    } else if (value == 2) {
                        if (Number(results.rows.item(i).revenue) > 2000000000) {
                            msg = "<b>" + results.rows.item(i).rank + "</b> : " +
                                "<b>" + results.rows.item(i).title + "</b> : " +
                                "<b>$ " + results.rows.item(i).revenue + "</b> : " +
                                "<b>" + results.rows.item(i).year + "</b><br />";
                            document.querySelector('#status').innerHTML += msg;
                        }
                    } else {
                        msg = "<b>" + results.rows.item(i).rank + "</b> : " +
                            "<b>" + results.rows.item(i).title + "</b> : " +
                            "<b>$ " + results.rows.item(i).revenue + "</b> : " +
                            "<b>" + results.rows.item(i).year + "</b><br />";
                        document.querySelector('#status').innerHTML += msg;
                    }

                }
            }, null);



    });

}