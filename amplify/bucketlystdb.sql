CREATE TABLE IF NOT EXISTS `LocationListDB`.`LocationList` (
  `LocationListID` INT NOT NULL AUTO_INCREMENT,
  `LocationListName` VARCHAR(100) NOT NULL,
  `ListDescription` VARCHAR(200) NULL,
  `IsPublic` TINYINT NULL,
  `CreatedTime` DATETIME NULL,
  `LocationListTags` VARCHAR(100) NULL,
  `LocationID` INT NOT NULL,
  `UserID` INT NOT NULL,
  PRIMARY KEY (`LocationListID`),
  INDEX `LocationID_idx` (`LocationID` ASC) VISIBLE,
  INDEX `fk_LocationList_PersonalUser1_idx` (`UserID` ASC) VISIBLE,
  CONSTRAINT `LocationID`
    FOREIGN KEY (`LocationID`)
    REFERENCES `LocationListDB`.`Location` (`LocationID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_LocationList_PersonalUser1`
    FOREIGN KEY (`UserID`)
    REFERENCES `LocationListDB`.`PersonalUser` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB