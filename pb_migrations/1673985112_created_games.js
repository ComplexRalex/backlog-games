migrate((db) => {
  const collection = new Collection({
    "id": "x4iruaipx6hs5ng",
    "created": "2023-01-17 19:51:52.046Z",
    "updated": "2023-01-17 19:51:52.046Z",
    "name": "games",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tm7wvcg0",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xwjjenre",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 255,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x4iruaipx6hs5ng");

  return dao.deleteCollection(collection);
})
