import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//#SQLite
import { SQLite } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
//
@Component({
  selector: 'page-sqllite',
  templateUrl: 'sqllite.html'
})
export class SqllitePage {

  public database: SQLite;
  public people: Array<Object>;
  public person = {
    id:'',
    firstname:'',
    lastname:'',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform) {
    //#SQLite
    platform.ready().then(() => {
      let db = new SQLite();
      db.openDatabase({name: "data.db", location: "default"}).then(() => {
        db.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
          console.log("TABLE CREATED: ", data);
        }, (error) => {
          console.error("Unable to execute sql", error);
        })
      }, (error) => {
        console.error("Unable to open database", error);
      });

      this.database = new SQLite();
      this.database.openDatabase({ name: "data.db", location: "default" }).then(() => {
        this.refresh();
      }, (error) => {
        console.log("ERROR: ", error);
      });

    });
    //

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SqllitePage');

  }
  public update(){
    let query = "UPDATE people SET firstname = ?,lastname = ? WHERE id = ?";
    let params = [this.person.firstname,this.person.lastname,this.person.id];
    this.database.executeSql(query,params)
      .then(
      (data) => {
        alert("UPDATED: " + JSON.stringify(data));
      },
      (error) => {
        alert("ERROR: " + JSON.stringify(error));
      }
    );
  }

  public delete(){
    let query = "DELETE FROM people WHERE id = ?";
    let params = [this.person.id];
    this.database.executeSql(query,params)
      .then(
      (data) => {
        alert("DELETED: " + JSON.stringify(data));
      },
      (error) => {
        alert("ERROR: " + JSON.stringify(error));
      }
    );
  }

  public add() {
    let query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
    let params = [this.person.firstname,this.person.lastname];
    this.database.executeSql(query, params).then((data) => {
      console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }

  public refresh() {
    this.database.executeSql("SELECT * FROM people", []).then((data) => {
      this.people = [];
      //alert("data.rows.item[1] = " + JSON.stringify(data.rows.item(1)));
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          this.people.push({ firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname });
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }
}
