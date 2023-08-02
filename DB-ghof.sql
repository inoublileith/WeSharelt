-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 192.168.10.10    Database: homestead
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_app` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_publication` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `provider` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `provider_SGBD` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_lastup` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom_app` (`nom_app`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'tttttttttttttt','ttttttttttt','tttttttttttttt','ttttttttttttttt','tttttttttttttt','tttttttttt','tttttttttttt',NULL,NULL);
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `analystes`
--

DROP TABLE IF EXISTS `analystes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `analystes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `specialite` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `mission` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `salaire` int DEFAULT NULL,
  `Date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `specialite` (`specialite`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `analystes`
--

LOCK TABLES `analystes` WRITE;
/*!40000 ALTER TABLE `analystes` DISABLE KEYS */;
INSERT INTO `analystes` VALUES (1,'zzzzzz','zzzzzzzzzzt',55,'tttttt',NULL,NULL);
/*!40000 ALTER TABLE `analystes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `associations`
--

DROP TABLE IF EXISTS `associations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `associations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `nature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `objectif` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `mission` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_fondation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `president` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `SG` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `RT` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `vice_president` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `contrat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tel_association` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `associations`
--

LOCK TABLES `associations` WRITE;
/*!40000 ALTER TABLE `associations` DISABLE KEYS */;
INSERT INTO `associations` VALUES (1,'h',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'rrhhhdfdf','ttt',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-13 13:55:14','2022-05-13 14:53:25'),(5,'eeeeeeee','eeeeeeeeee','','','','','','','','','','',0,'2022-05-14 09:16:33','2022-05-14 09:16:33');
/*!40000 ALTER TABLE `associations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `astuce_publics`
--

DROP TABLE IF EXISTS `astuce_publics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `astuce_publics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `image` int DEFAULT NULL,
  `tags` int DEFAULT NULL,
  `etat` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `idespace` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astuce_publics`
--

LOCK TABLES `astuce_publics` WRITE;
/*!40000 ALTER TABLE `astuce_publics` DISABLE KEYS */;
/*!40000 ALTER TABLE `astuce_publics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `benevoles`
--

DROP TABLE IF EXISTS `benevoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `benevoles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `prenom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `linkedin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `context` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `retenu` int DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `benevoles`
--

LOCK TABLES `benevoles` WRITE;
/*!40000 ALTER TABLE `benevoles` DISABLE KEYS */;
INSERT INTO `benevoles` VALUES (5,'rr','rrr','','','','','',0,0,'2022-01-01','2022-05-17 13:07:13','2022-05-17 13:07:13'),(6,'majdaaaa','selmi','','','','','',0,0,'2022-01-01','2022-05-18 10:19:22','2022-05-18 10:20:25');
/*!40000 ALTER TABLE `benevoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `demandes`
--

DROP TABLE IF EXISTS `demandes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demandes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `qte` int DEFAULT NULL,
  `nb_personne` int DEFAULT NULL,
  `date_de` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idstock` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demandes`
--

LOCK TABLES `demandes` WRITE;
/*!40000 ALTER TABLE `demandes` DISABLE KEYS */;
INSERT INTO `demandes` VALUES (6,'aaa',50,80,'18/04/2017',1,NULL,'2022-05-17 13:45:52','2022-05-18 13:01:54',12),(7,'wqiiii',50,50,'13/03/200',1,NULL,'2022-05-17 13:46:57','2022-05-18 13:11:24',3),(8,'adadad',150,5,'2022-05-18',1,NULL,'2022-05-18 13:06:16','2022-05-18 13:06:30',3);
/*!40000 ALTER TABLE `demandes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dons`
--

DROP TABLE IF EXISTS `dons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `qte` int DEFAULT NULL,
  `date_livraison` varchar(255) DEFAULT NULL,
  `date_validation` varchar(255) DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idstock` int DEFAULT NULL,
  `iduser` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idstock` (`idstock`),
  KEY `iduser` (`iduser`),
  CONSTRAINT `dons_ibfk_1` FOREIGN KEY (`idstock`) REFERENCES `stocks` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `dons_ibfk_2` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dons`
--

LOCK TABLES `dons` WRITE;
/*!40000 ALTER TABLE `dons` DISABLE KEYS */;
INSERT INTO `dons` VALUES (11,'dadadad',100,'','',1,'2022-05-18 12:02:45','2022-05-18 13:03:41',12,1);
/*!40000 ALTER TABLE `dons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `espaces`
--

DROP TABLE IF EXISTS `espaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `espaces` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `icone` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `iduser` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `espaces`
--

LOCK TABLES `espaces` WRITE;
/*!40000 ALTER TABLE `espaces` DISABLE KEYS */;
/*!40000 ALTER TABLE `espaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evenements`
--

DROP TABLE IF EXISTS `evenements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evenements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `adresse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `public` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre` (`titre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evenements`
--

LOCK TABLES `evenements` WRITE;
/*!40000 ALTER TABLE `evenements` DISABLE KEYS */;
INSERT INTO `evenements` VALUES (2,'festivale de couleur','2022-05-04','jendouba','festival de couleur ','','','2022-05-13 20:52:41','2022-05-17 13:25:35'),(3,'evenement de collecte','2022-05-19','kef','fete de musique ','','','2022-05-14 09:07:55','2022-05-14 09:07:55');
/*!40000 ALTER TABLE `evenements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forums`
--

DROP TABLE IF EXISTS `forums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sujet` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sujet` (`sujet`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forums`
--

LOCK TABLES `forums` WRITE;
/*!40000 ALTER TABLE `forums` DISABLE KEYS */;
INSERT INTO `forums` VALUES (3,'ttttt','2022-01-01',0,'2022-05-14 09:07:25','2022-05-14 09:07:25');
/*!40000 ALTER TABLE `forums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupes`
--

DROP TABLE IF EXISTS `groupes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groupes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `n_max_membres` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `objs_global` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `assistance_par_jour` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `assistance_par_semaine` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `idespace` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupes`
--

LOCK TABLES `groupes` WRITE;
/*!40000 ALTER TABLE `groupes` DISABLE KEYS */;
/*!40000 ALTER TABLE `groupes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livraisons`
--

DROP TABLE IF EXISTS `livraisons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livraisons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_liv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `etat_liv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livraisons`
--

LOCK TABLES `livraisons` WRITE;
/*!40000 ALTER TABLE `livraisons` DISABLE KEYS */;
INSERT INTO `livraisons` VALUES (6,'tt','2022-01-01','2022-05-18','rrr','2022-05-17 12:42:08','2022-05-17 12:42:08'),(7,'rr','2022-01-01','2022-05-21','ddd','2022-05-17 12:42:49','2022-05-17 12:42:49'),(8,'rrr',NULL,'2022-05-26','rr','2022-05-17 12:45:28','2022-05-17 12:45:28'),(9,'iii',NULL,'2022-05-19','ee','2022-05-17 12:46:42','2022-05-17 12:46:42'),(10,'www',NULL,'2022-05-21','sss','2022-05-17 12:47:50','2022-05-17 12:47:50'),(11,'dddd',NULL,'2022-05-20','sss','2022-05-17 12:56:27','2022-05-17 12:56:27'),(12,'zuuu',NULL,'2022-05-13','tt','2022-05-17 12:57:47','2022-05-17 12:57:47');
/*!40000 ALTER TABLE `livraisons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membres`
--

DROP TABLE IF EXISTS `membres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `etat` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `groupeId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `membres_userId_groupeId_unique` (`groupeId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `membres_ibfk_1` FOREIGN KEY (`groupeId`) REFERENCES `groupes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `membres_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membres`
--

LOCK TABLES `membres` WRITE;
/*!40000 ALTER TABLE `membres` DISABLE KEYS */;
/*!40000 ALTER TABLE `membres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objectifs`
--

DROP TABLE IF EXISTS `objectifs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objectifs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `date_debut` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `date_fin` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `idgroupe` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objectifs`
--

LOCK TABLES `objectifs` WRITE;
/*!40000 ALTER TABLE `objectifs` DISABLE KEYS */;
/*!40000 ALTER TABLE `objectifs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organismes`
--

DROP TABLE IF EXISTS `organismes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organismes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `domaine` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `mission` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_fondation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `president` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `contact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `adresse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tel` int DEFAULT NULL,
  `evenement` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `stock_global` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organismes`
--

LOCK TABLES `organismes` WRITE;
/*!40000 ALTER TABLE `organismes` DISABLE KEYS */;
INSERT INTO `organismes` VALUES (1,'uuuuuuuuuuuuuuuu','ttttttttt','ttttttttttttt',NULL,NULL,NULL,'hhhhhh','iiiiiiii','zzzzzzzz',22222222,'tttttttttttt',20,NULL,NULL),(4,'iiiiiiiiiiiiiii','ooooooooooooooo',NULL,'','','','','','',0,NULL,NULL,'2022-05-14 09:09:40','2022-05-14 09:09:40');
/*!40000 ALTER TABLE `organismes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan_publics`
--

DROP TABLE IF EXISTS `plan_publics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_publics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `mois` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `n_semaine` int DEFAULT NULL,
  `periode` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `charges` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `seance` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `intensite` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `idespace` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan_publics`
--

LOCK TABLES `plan_publics` WRITE;
/*!40000 ALTER TABLE `plan_publics` DISABLE KEYS */;
/*!40000 ALTER TABLE `plan_publics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produits`
--

DROP TABLE IF EXISTS `produits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produits` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `prix` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `promoted` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `iduser` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `iduser` (`iduser`),
  CONSTRAINT `produits_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produits`
--

LOCK TABLES `produits` WRITE;
/*!40000 ALTER TABLE `produits` DISABLE KEYS */;
/*!40000 ALTER TABLE `produits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recommandations`
--

DROP TABLE IF EXISTS `recommandations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recommandations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `domaine` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `specification` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `retenu` int DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre` (`titre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recommandations`
--

LOCK TABLES `recommandations` WRITE;
/*!40000 ALTER TABLE `recommandations` DISABLE KEYS */;
INSERT INTO `recommandations` VALUES (4,'bdver','erverv',NULL,NULL,NULL,NULL,0,'2022-05-18 10:02:34','2022-05-18 10:02:34'),(5,'erverv','erverv',NULL,NULL,NULL,NULL,0,'2022-05-18 10:02:43','2022-05-18 10:02:43');
/*!40000 ALTER TABLE `recommandations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refreshTokens`
--

DROP TABLE IF EXISTS `refreshTokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refreshTokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `expiryDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `refreshTokens_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=361 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refreshTokens`
--

LOCK TABLES `refreshTokens` WRITE;
/*!40000 ALTER TABLE `refreshTokens` DISABLE KEYS */;
INSERT INTO `refreshTokens` VALUES (230,'1acff809-5d3d-48d0-a59b-46e9a53df227','2022-05-15 11:58:38','2022-05-14 11:58:38','2022-05-14 11:58:38',1),(231,'82b8c96b-399c-43ea-8fbb-d57aee56e99e','2022-05-15 11:59:24','2022-05-14 11:59:24','2022-05-14 11:59:24',2),(232,'d8ec5d9e-9965-480f-8578-8beda0302ff8','2022-05-15 11:59:52','2022-05-14 11:59:52','2022-05-14 11:59:52',3),(233,'9b6befcb-a3fc-4c2a-9dd6-d75cfe3b8b32','2022-05-15 12:00:16','2022-05-14 12:00:16','2022-05-14 12:00:16',4),(234,'b2b94da8-5066-4a88-8e38-92acca9172cb','2022-05-15 12:21:30','2022-05-14 12:21:30','2022-05-14 12:21:30',1),(235,'d16d0c49-a119-4756-9d89-0a44d9dbf05f','2022-05-15 12:22:24','2022-05-14 12:22:24','2022-05-14 12:22:24',2),(236,'72e35e92-0bc3-4c68-a277-57f88afcfbea','2022-05-15 12:22:37','2022-05-14 12:22:37','2022-05-14 12:22:37',1),(237,'53386a90-886c-4f1b-bf4c-99f7ef1b2b01','2022-05-15 12:30:05','2022-05-14 12:30:05','2022-05-14 12:30:05',1),(238,'55fe90ad-0450-466f-bce3-c5b2890ccc5f','2022-05-15 12:36:40','2022-05-14 12:36:40','2022-05-14 12:36:40',1),(239,'7fcab9d6-6bbe-4715-818f-66cbf2de365a','2022-05-15 12:42:27','2022-05-14 12:42:27','2022-05-14 12:42:27',1),(240,'631cfe59-0b11-4f6f-ad6c-59a23206e881','2022-05-15 12:47:56','2022-05-14 12:47:56','2022-05-14 12:47:56',1),(241,'1115ff73-3ec5-4193-9524-4bcdcd634783','2022-05-15 12:53:37','2022-05-14 12:53:37','2022-05-14 12:53:37',1),(242,'d757e6e7-9f14-45a1-a3b3-987d9c409506','2022-05-15 12:57:00','2022-05-14 12:57:00','2022-05-14 12:57:00',1),(243,'25f845d3-6413-4078-b607-b2a6c2af00ed','2022-05-15 13:04:28','2022-05-14 13:04:28','2022-05-14 13:04:28',1),(244,'90f1c059-98c0-4b13-aea7-e0cfd61c9085','2022-05-15 13:07:19','2022-05-14 13:07:19','2022-05-14 13:07:19',2),(245,'7825232e-5463-4a45-a5b4-544354f8750f','2022-05-15 13:07:23','2022-05-14 13:07:23','2022-05-14 13:07:23',1),(246,'1783aca6-2c47-420f-acea-0232c0d7e948','2022-05-15 13:07:35','2022-05-14 13:07:35','2022-05-14 13:07:35',3),(247,'1c19a564-06be-449c-bf1a-dbd55c3b995c','2022-05-15 13:08:02','2022-05-14 13:08:02','2022-05-14 13:08:02',1),(248,'7e961683-efc6-4af9-b0cb-e1d95f6ac9ad','2022-05-15 13:08:08','2022-05-14 13:08:08','2022-05-14 13:08:08',4),(249,'5a30ac6b-821b-4491-b6c0-16a45a7f140a','2022-05-15 13:09:16','2022-05-14 13:09:16','2022-05-14 13:09:16',1),(250,'e0753374-db5d-46f5-a3a3-b98042bc352d','2022-05-15 13:11:39','2022-05-14 13:11:39','2022-05-14 13:11:39',1),(251,'be3d5a74-4ebd-4a69-bfa7-7ecd6d23d9eb','2022-05-15 13:13:13','2022-05-14 13:13:13','2022-05-14 13:13:13',1),(252,'41415ff4-e6ef-4442-9151-aba73d9a46e9','2022-05-15 13:14:49','2022-05-14 13:14:49','2022-05-14 13:14:49',1),(253,'1254ad45-a9b2-4f54-bf8b-ff567b971b94','2022-05-15 13:31:42','2022-05-14 13:31:42','2022-05-14 13:31:42',1),(254,'38cd893b-7e27-4313-b2cf-b27d4074d9fc','2022-05-15 13:32:35','2022-05-14 13:32:35','2022-05-14 13:32:35',1),(255,'5656f1cb-1b50-4f2d-96a0-dcb13b264639','2022-05-15 13:34:55','2022-05-14 13:34:55','2022-05-14 13:34:55',1),(256,'0ac952bf-7529-4d3e-99a1-ac6426634b6b','2022-05-15 13:37:23','2022-05-14 13:37:23','2022-05-14 13:37:23',1),(257,'df54f805-14a8-4bdc-9923-05775aee38e0','2022-05-15 13:42:34','2022-05-14 13:42:34','2022-05-14 13:42:34',1),(258,'a1b90439-c4b4-4b61-af13-46bb2d26cc86','2022-05-15 13:44:00','2022-05-14 13:44:00','2022-05-14 13:44:00',1),(259,'fd8bad36-5c82-4f98-8e60-363dbb190606','2022-05-15 13:50:27','2022-05-14 13:50:27','2022-05-14 13:50:27',1),(260,'de45ebdf-d036-433c-a9c4-58595d6b605a','2022-05-15 13:53:27','2022-05-14 13:53:27','2022-05-14 13:53:27',1),(261,'d00d8285-ce25-4f38-8e94-9e5b74343323','2022-05-15 13:57:05','2022-05-14 13:57:05','2022-05-14 13:57:05',1),(262,'232932d1-5eee-4ab7-9471-03da82350920','2022-05-15 13:58:13','2022-05-14 13:58:13','2022-05-14 13:58:13',1),(263,'fd2d8c2a-3adc-40d4-bd13-b6549975cc9b','2022-05-15 14:08:32','2022-05-14 14:08:32','2022-05-14 14:08:32',1),(264,'2090d292-ec11-4abc-a88a-eca0ee2810d0','2022-05-15 14:09:13','2022-05-14 14:09:13','2022-05-14 14:09:13',1),(265,'86854a41-126b-45b5-a100-2c99fb0d8f48','2022-05-15 14:11:03','2022-05-14 14:11:03','2022-05-14 14:11:03',1),(266,'5ee7655f-6f04-40a4-b96a-3de64b2cf1c2','2022-05-15 14:13:35','2022-05-14 14:13:35','2022-05-14 14:13:35',2),(267,'1acb790f-159a-43df-a5c1-ae89d22cdbef','2022-05-15 14:46:03','2022-05-14 14:46:03','2022-05-14 14:46:03',1),(268,'b0199413-9bba-4ae0-8af9-473033851f6c','2022-05-15 14:54:41','2022-05-14 14:54:41','2022-05-14 14:54:41',1),(269,'30555bc9-f4ce-48ef-b3b1-fe33325e2d82','2022-05-15 14:55:24','2022-05-14 14:55:24','2022-05-14 14:55:24',1),(270,'69a39397-43c5-4646-b7be-975f9c7f5ad9','2022-05-15 14:56:35','2022-05-14 14:56:35','2022-05-14 14:56:35',1),(271,'737abd8d-5de9-44a6-9680-a50dba4c258c','2022-05-15 15:01:27','2022-05-14 15:01:27','2022-05-14 15:01:27',1),(272,'2c92bf77-af61-4f01-925c-2a643a6516eb','2022-05-15 15:03:44','2022-05-14 15:03:44','2022-05-14 15:03:44',1),(273,'5ea13376-9ae3-4fad-b654-1d4a9eeb5900','2022-05-15 15:10:56','2022-05-14 15:10:56','2022-05-14 15:10:56',1),(274,'faff880b-5dec-4191-af0e-d5efc107ccd9','2022-05-15 15:11:21','2022-05-14 15:11:21','2022-05-14 15:11:21',1),(275,'cc983f21-31f4-4330-974d-b98a0261498b','2022-05-15 15:18:24','2022-05-14 15:18:24','2022-05-14 15:18:24',1),(276,'174cd861-ea66-4eb6-a5fc-0ead48c0042a','2022-05-15 15:19:38','2022-05-14 15:19:38','2022-05-14 15:19:38',1),(277,'3847d60f-9a57-4ee6-978b-0a191d9af2ba','2022-05-15 15:20:34','2022-05-14 15:20:34','2022-05-14 15:20:34',1),(278,'b96a28fd-c459-45c1-87a4-d7f5d6225851','2022-05-15 15:21:56','2022-05-14 15:21:56','2022-05-14 15:21:56',1),(279,'effdab41-2680-4a3f-93b2-98fccbc858ed','2022-05-15 15:22:22','2022-05-14 15:22:22','2022-05-14 15:22:22',1),(280,'165691ac-aa7b-42f0-9f0c-9dcb026c922e','2022-05-15 15:24:23','2022-05-14 15:24:23','2022-05-14 15:24:23',1),(281,'ff275796-ab52-41ad-a74f-01e1f45ed4a3','2022-05-15 15:26:56','2022-05-14 15:26:56','2022-05-14 15:26:56',1),(282,'1c4a0698-1bb6-4a7d-80e6-c404707b4f2a','2022-05-15 15:30:30','2022-05-14 15:30:30','2022-05-14 15:30:30',1),(283,'8bd3b8de-cc06-4527-816d-e64cec33475a','2022-05-15 15:32:47','2022-05-14 15:32:47','2022-05-14 15:32:47',1),(284,'763895f3-917c-428b-af52-0f3dff523563','2022-05-15 15:33:53','2022-05-14 15:33:53','2022-05-14 15:33:53',1),(285,'25d84af2-9104-44ab-bdf1-717fd7b71699','2022-05-15 15:37:14','2022-05-14 15:37:14','2022-05-14 15:37:14',1),(286,'cfdcdb97-b1bd-4549-831f-7b6c7b8ab61c','2022-05-15 15:43:25','2022-05-14 15:43:25','2022-05-14 15:43:25',1),(287,'c347933c-113c-47f1-88d9-05b6fa8d1171','2022-05-15 15:45:42','2022-05-14 15:45:42','2022-05-14 15:45:42',1),(288,'f055c118-70e3-4310-bdde-6bb319359bb7','2022-05-15 15:49:01','2022-05-14 15:49:01','2022-05-14 15:49:01',1),(289,'9f9b3e6c-e18e-41ff-b649-984be5c67281','2022-05-15 15:50:03','2022-05-14 15:50:03','2022-05-14 15:50:03',1),(290,'620e8713-0e66-489b-ab63-01497936c368','2022-05-15 15:51:38','2022-05-14 15:51:38','2022-05-14 15:51:38',1),(291,'25ac78a4-1034-4478-8995-9e11907b0fad','2022-05-15 15:53:42','2022-05-14 15:53:42','2022-05-14 15:53:42',1),(292,'12b69f3b-0a83-4100-85da-a03494784dd0','2022-05-15 15:56:57','2022-05-14 15:56:57','2022-05-14 15:56:57',1),(293,'c5ff315d-878d-4382-b95b-e6ad5c975761','2022-05-15 16:06:15','2022-05-14 16:06:15','2022-05-14 16:06:15',1),(294,'e7710941-f8ae-4ed1-b23f-6e75c4900e9a','2022-05-15 16:22:12','2022-05-14 16:22:12','2022-05-14 16:22:12',1),(295,'797b75e5-d38c-4d18-9e7f-e3cb818ebcb1','2022-05-15 16:30:34','2022-05-14 16:30:34','2022-05-14 16:30:34',1),(296,'1a7a64e7-25c9-4a4d-a666-29bedc9bf37e','2022-05-15 16:31:19','2022-05-14 16:31:19','2022-05-14 16:31:19',1),(297,'9b7e8f10-5c71-4dd4-8a2e-a006a5842779','2022-05-15 16:32:19','2022-05-14 16:32:19','2022-05-14 16:32:19',1),(298,'59cd248d-7139-4d57-92f6-8bb4c776daa3','2022-05-15 16:34:02','2022-05-14 16:34:02','2022-05-14 16:34:02',1),(299,'6d580e98-1b6a-493d-82e4-118a1625ce39','2022-05-15 16:41:06','2022-05-14 16:41:06','2022-05-14 16:41:06',1),(300,'455af126-7fa5-41c4-b1a3-1d89afa1119d','2022-05-15 16:41:58','2022-05-14 16:41:58','2022-05-14 16:41:58',1),(301,'16678d0a-14b8-412e-aed0-7306f5a15582','2022-05-15 16:45:16','2022-05-14 16:45:16','2022-05-14 16:45:16',3),(302,'cd84a511-c00e-4838-87ba-76abeecce745','2022-05-15 16:47:30','2022-05-14 16:47:30','2022-05-14 16:47:30',2),(303,'f73177ce-1e49-4fec-bea7-37bb92c33f6a','2022-05-15 17:44:45','2022-05-14 17:44:45','2022-05-14 17:44:45',4),(304,'f50b56bd-a06c-4470-8153-78f2da7dbf7d','2022-05-15 17:45:05','2022-05-14 17:45:05','2022-05-14 17:45:05',1),(305,'90345b0f-012c-4e8f-ad89-f86c32d0e46d','2022-05-15 17:59:00','2022-05-14 17:59:00','2022-05-14 17:59:00',2),(306,'46a40f2b-538a-4e20-aebe-697ba0a73c8e','2022-05-15 18:20:31','2022-05-14 18:20:31','2022-05-14 18:20:31',3),(307,'eb49c208-3003-4f1d-bf32-d186b0cbd9e0','2022-05-15 18:40:41','2022-05-14 18:40:41','2022-05-14 18:40:41',1),(308,'cc00931f-4e50-47a8-92f3-2938f9c20e93','2022-05-15 18:42:13','2022-05-14 18:42:13','2022-05-14 18:42:13',3),(309,'5bb2bc76-6e50-4414-be28-ab6c9910f7ff','2022-05-15 18:51:34','2022-05-14 18:51:34','2022-05-14 18:51:34',1),(310,'71075e91-69bb-4d0d-b266-9cfc4cd34301','2022-05-15 18:51:34','2022-05-14 18:51:34','2022-05-14 18:51:34',1),(311,'a727cff8-17b3-4898-b8d4-a4eb7f5521a9','2022-05-15 18:56:25','2022-05-14 18:56:25','2022-05-14 18:56:25',3),(312,'db222f7a-3713-44d1-a394-9139aa889774','2022-05-16 10:14:11','2022-05-15 10:14:11','2022-05-15 10:14:11',1),(313,'a43cb4e3-6c45-44ff-b62e-96e7d872a0b1','2022-05-16 13:36:38','2022-05-15 13:36:38','2022-05-15 13:36:38',1),(314,'02b187ec-11c7-4cd4-9989-c6c5bfe8dc2b','2022-05-16 13:56:02','2022-05-15 13:56:02','2022-05-15 13:56:02',1),(315,'7d665530-7d9a-4126-a867-0ab1bc91c578','2022-05-16 14:02:42','2022-05-15 14:02:42','2022-05-15 14:02:42',2),(316,'62ec1251-c465-46e3-9644-debb5c183d7d','2022-05-16 14:03:01','2022-05-15 14:03:01','2022-05-15 14:03:01',4),(317,'304cd3b7-3f43-42a7-bbd4-f21a8396b585','2022-05-16 14:04:01','2022-05-15 14:04:01','2022-05-15 14:04:01',3),(318,'3bcbd93c-8d19-4d5d-8c17-c82d4941dad8','2022-05-16 14:05:45','2022-05-15 14:05:45','2022-05-15 14:05:45',4),(319,'7c388254-ac2b-474c-b96b-8735f38b863d','2022-05-16 14:15:00','2022-05-15 14:15:00','2022-05-15 14:15:00',3),(320,'9f7e7876-f1fa-4f9f-94a6-378b01f58c98','2022-05-16 14:15:23','2022-05-15 14:15:23','2022-05-15 14:15:23',4),(321,'4fd989c7-b579-4be5-a5bf-26e0150089d7','2022-05-16 14:15:46','2022-05-15 14:15:46','2022-05-15 14:15:46',1),(322,'27a4164c-23b4-4932-bda2-b3f245ade52f','2022-05-16 14:23:14','2022-05-15 14:23:14','2022-05-15 14:23:14',2),(323,'5b099a3c-ae2b-40b0-b825-5f85718ce885','2022-05-16 14:23:42','2022-05-15 14:23:42','2022-05-15 14:23:42',1),(324,'612fce59-ca7e-4469-bf63-d3b288e9b76a','2022-05-18 07:54:40','2022-05-17 07:54:40','2022-05-17 07:54:40',1),(325,'e254f522-c823-41d3-86f4-9169cecf3f09','2022-05-18 07:57:49','2022-05-17 07:57:49','2022-05-17 07:57:49',2),(326,'0007ca81-a8de-4576-8f75-6303dd734df2','2022-05-18 08:06:10','2022-05-17 08:06:10','2022-05-17 08:06:10',1),(327,'0594ca74-66cf-4aff-ab11-ba8a936c4716','2022-05-18 09:07:49','2022-05-17 09:07:49','2022-05-17 09:07:49',1),(328,'ff5cfbba-cc47-41c0-b758-1317ef80a93d','2022-05-18 09:33:32','2022-05-17 09:33:32','2022-05-17 09:33:32',1),(329,'406c54e0-aa2d-4b7e-acba-c9e3cd1933a9','2022-05-18 11:00:14','2022-05-17 11:00:14','2022-05-17 11:00:14',1),(330,'95469c87-e089-4eac-a852-d91c8ea5125f','2022-05-18 11:47:14','2022-05-17 11:47:14','2022-05-17 11:47:14',1),(331,'24fc78af-d748-4df4-a360-7ee15039c320','2022-05-18 11:49:16','2022-05-17 11:49:16','2022-05-17 11:49:16',3),(332,'98547343-39b5-44b7-83f2-a6c07a779375','2022-05-18 11:51:33','2022-05-17 11:51:33','2022-05-17 11:51:33',4),(333,'9f0fe467-2263-43fa-b072-a6e3e40a81ef','2022-05-18 11:53:45','2022-05-17 11:53:45','2022-05-17 11:53:45',4),(334,'68011cd6-3faf-426a-ab9f-9f144c9570e2','2022-05-18 11:57:03','2022-05-17 11:57:03','2022-05-17 11:57:03',3),(335,'9ef1c44c-3cc8-4c45-ab15-d1a69be4927e','2022-05-18 12:57:37','2022-05-17 12:57:37','2022-05-17 12:57:37',3),(336,'b10e7f8a-b4b4-4e7b-871e-83adafb8b30c','2022-05-18 13:10:52','2022-05-17 13:10:52','2022-05-17 13:10:52',4),(337,'1a5495cb-2b36-4fcc-a330-c8f0ae9fb65c','2022-05-18 13:11:05','2022-05-17 13:11:05','2022-05-17 13:11:05',1),(338,'8302df99-84a7-479e-b5fd-98ae0c23ef2a','2022-05-18 13:16:16','2022-05-17 13:16:16','2022-05-17 13:16:16',1),(339,'4d5ed8e9-b580-4f54-aec9-78a9c5d24a51','2022-05-18 13:16:49','2022-05-17 13:16:49','2022-05-17 13:16:49',4),(340,'5f8db5a9-9c60-432c-b33d-0dacfff45b48','2022-05-18 13:17:28','2022-05-17 13:17:28','2022-05-17 13:17:28',3),(341,'d8b3667a-8904-48ad-b017-0854e3492667','2022-05-18 13:18:04','2022-05-17 13:18:04','2022-05-17 13:18:04',2),(342,'2cb869f5-01b6-40df-98c1-324af43af32a','2022-05-18 13:18:38','2022-05-17 13:18:38','2022-05-17 13:18:38',3),(343,'e63368b4-441d-4d82-a8ba-76abc5226615','2022-05-18 13:19:07','2022-05-17 13:19:07','2022-05-17 13:19:07',4),(344,'b5976bd6-6d92-407f-a39c-271915792a6d','2022-05-18 13:26:32','2022-05-17 13:26:32','2022-05-17 13:26:32',3),(345,'565b9f1b-3813-4724-96bc-f2328ebe65b1','2022-05-18 13:31:51','2022-05-17 13:31:51','2022-05-17 13:31:51',2),(346,'d11325e7-e5bc-4943-97de-6113b4ee2021','2022-05-18 13:41:32','2022-05-17 13:41:32','2022-05-17 13:41:32',2),(347,'9c078d4d-f09a-4ab6-ab68-4bb6a4576b0f','2022-05-18 13:42:30','2022-05-17 13:42:30','2022-05-17 13:42:30',3),(348,'7d787e20-0810-4562-b8f4-c645d10e899e','2022-05-18 13:45:29','2022-05-17 13:45:29','2022-05-17 13:45:29',3),(349,'c08c09f4-35c6-4535-b5a0-9bb9a20e7a3c','2022-05-18 13:49:51','2022-05-17 13:49:51','2022-05-17 13:49:51',NULL),(350,'b962eefd-5f75-4cf7-bef6-708cd8a65cf1','2022-05-18 13:49:51','2022-05-17 13:49:51','2022-05-17 13:49:51',NULL),(351,'ce1a9516-d719-4448-b9a0-9cf4b07c2b99','2022-05-18 13:51:04','2022-05-17 13:51:04','2022-05-17 13:51:04',NULL),(352,'dec0c886-e58f-4fce-9243-2c2865de9cdb','2022-05-18 21:33:48','2022-05-17 21:33:48','2022-05-17 21:33:48',2),(353,'a9835462-e689-4232-b4fe-a961f499c8b1','2022-05-19 08:37:43','2022-05-18 08:37:43','2022-05-18 08:37:43',2),(354,'ed5e7135-03c5-47c4-a77a-c4b28489659b','2022-05-19 09:18:24','2022-05-18 09:18:24','2022-05-18 09:18:24',2),(355,'c8bfa7b3-44aa-4c1e-b083-fca889e0cbe9','2022-05-19 09:54:21','2022-05-18 09:54:21','2022-05-18 09:54:21',2),(356,'132543b3-f815-4dab-880c-6369dcd1bf10','2022-05-19 09:55:58','2022-05-18 09:55:58','2022-05-18 09:55:58',1),(357,'043631f0-5e84-457d-8f9f-2d5565a25a15','2022-05-19 10:13:16','2022-05-18 10:13:16','2022-05-18 10:13:16',4),(358,'ea37f9ee-ffc4-4f4c-8be4-40468c27096f','2022-05-19 10:15:48','2022-05-18 10:15:48','2022-05-18 10:15:48',2),(359,'59adc083-c283-4459-bff7-64e1f1c5e0ae','2022-05-19 10:16:54','2022-05-18 10:16:54','2022-05-18 10:16:54',3),(360,'54021e76-2681-43b2-8a60-a499439d90f9','2022-05-19 10:24:27','2022-05-18 10:24:27','2022-05-18 10:24:27',1);
/*!40000 ALTER TABLE `refreshTokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regime_publics`
--

DROP TABLE IF EXISTS `regime_publics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regime_publics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `n_repas` int DEFAULT NULL,
  `n_calories` int DEFAULT NULL,
  `recette` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `periode` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `quantite_eau` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `a_eviter` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `duree_sport_par_jour` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `n_seances_semaine` int DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `idespace` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regime_publics`
--

LOCK TABLES `regime_publics` WRITE;
/*!40000 ALTER TABLE `regime_publics` DISABLE KEYS */;
/*!40000 ALTER TABLE `regime_publics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reponsefs`
--

DROP TABLE IF EXISTS `reponsefs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reponsefs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reponse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reponse` (`reponse`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reponsefs`
--

LOCK TABLES `reponsefs` WRITE;
/*!40000 ALTER TABLE `reponsefs` DISABLE KEYS */;
/*!40000 ALTER TABLE `reponsefs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reponsesons`
--

DROP TABLE IF EXISTS `reponsesons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reponsesons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reponse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reponse` (`reponse`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reponsesons`
--

LOCK TABLES `reponsesons` WRITE;
/*!40000 ALTER TABLE `reponsesons` DISABLE KEYS */;
/*!40000 ALTER TABLE `reponsesons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2022-05-14 10:45:31','2022-05-14 10:45:31'),(2,'analyste','2022-05-14 10:45:31','2022-05-14 10:45:31'),(3,'association','2022-05-14 10:45:31','2022-05-14 10:45:31'),(4,'organisme','2022-05-14 10:45:31','2022-05-14 10:45:31'),(5,'user','2022-05-14 10:45:31','2022-05-14 10:45:31');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sdfs`
--

DROP TABLE IF EXISTS `sdfs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sdfs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `prenom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `genre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `age` int DEFAULT NULL,
  `cas_social` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `handicape` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `maladie` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `adresse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `local` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sdfs`
--

LOCK TABLES `sdfs` WRITE;
/*!40000 ALTER TABLE `sdfs` DISABLE KEYS */;
/*!40000 ALTER TABLE `sdfs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sondages`
--

DROP TABLE IF EXISTS `sondages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sondages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `proposition1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `proposition2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `proposition3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `question` (`question`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sondages`
--

LOCK TABLES `sondages` WRITE;
/*!40000 ALTER TABLE `sondages` DISABLE KEYS */;
INSERT INTO `sondages` VALUES (2,'tttttttttt','','','','2022-01-01',0,'2022-05-14 09:07:15','2022-05-14 09:07:15'),(3,'hhhhhhhhhhhh','hhhhhhhhhhhhhh','','','2022-01-01',0,'2022-05-15 13:57:45','2022-05-15 13:57:45');
/*!40000 ALTER TABLE `sondages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stocks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantite_total` int DEFAULT NULL,
  `public` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre` (`titre`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
INSERT INTO `stocks` VALUES (3,'Medicaments','aaaaaaaaa',0,0,'2022-05-17 11:10:49','2022-05-18 13:11:24'),(12,'Nouritures','daadad',704,0,'2022-05-18 11:09:30','2022-05-18 13:10:57');
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taches`
--

DROP TABLE IF EXISTS `taches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `date_debut` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `date_fin` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `etat` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `idobj` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taches`
--

LOCK TABLES `taches` WRITE;
/*!40000 ALTER TABLE `taches` DISABLE KEYS */;
/*!40000 ALTER TABLE `taches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`roleId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES ('2022-05-14 11:42:44','2022-05-14 11:42:44',1,1),('2022-05-14 11:42:44','2022-05-14 11:42:44',2,2),('2022-05-14 11:42:44','2022-05-14 11:42:44',3,3),('2022-05-14 11:42:44','2022-05-14 11:42:44',4,4);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `civil` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `prenom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `date_naissance` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `cin` int DEFAULT NULL,
  `tel` int DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `gouvernorat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `adresse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `cpostal` int DEFAULT NULL,
  `delegation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `login` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `profil` int DEFAULT NULL,
  `permissions` int DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `date_ins` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `avatar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'admin','admin',NULL,NULL,12345678,'admin@infoesprit.technology',NULL,NULL,NULL,NULL,'adminn','$2a$08$0vBrA3O47m6dplImjIwLTu0WY97ZPmY0R0VQdyI5U1RNt5q3LOg4K',1,100,1,'2022-04-13 09:09:46','2022-04-13 09:09:46','2022-04-13 09:09:46',NULL),(2,NULL,'analyste','analyste',NULL,NULL,12345678,'analyste@weshareit.tn',NULL,NULL,NULL,NULL,'analyste','$2a$08$doqFhptfqBaqBh22BNHb6OCQmlBxAmUSOb4paqCT6IzL8K3BydqFm',2,100,1,'2022-04-13 09:09:46','2022-05-14 11:54:27','2022-05-14 11:54:27',NULL),(3,NULL,'association','association',NULL,NULL,12345678,'association@weshareit.tn',NULL,NULL,NULL,NULL,'association','$2a$08$YskCHnbEefm/83whaEcMAeB9aPP5ud5zsTIC0TAOdnSirh6yrcWL6',3,100,1,'2022-04-13 09:09:46','2022-05-14 11:55:27','2022-05-14 11:55:27',NULL),(4,NULL,'organisme','organisme',NULL,NULL,12345678,'organisme@weshareit.tn',NULL,NULL,NULL,NULL,'organisme','$2a$08$1vNDhfdZBqwaFgPTPR8mXONETKWel3egK9W6Gn7Z6ucW2c8iVrPLm',4,100,1,'2022-04-13 09:09:46','2022-05-14 11:55:52','2022-05-14 11:55:52',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-18 14:23:23
