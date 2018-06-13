-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 13, 2018 at 03:34 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam-result`
--

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `tranId` int(11) NOT NULL,
  `assignmentDate` datetime DEFAULT NULL,
  `period` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `academicYear` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `curriculum`
--

CREATE TABLE `curriculum` (
  `tranId` int(11) NOT NULL,
  `curriculumDate` datetime DEFAULT NULL,
  `period` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `academicYear` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `finalResult`
--

CREATE TABLE `finalResult` (
  `tranId` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `rollNo` varchar(45) DEFAULT NULL,
  `result` varchar(45) DEFAULT NULL,
  `academicYear` varchar(45) DEFAULT NULL,
  `eduYear` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `timeTable`
--

CREATE TABLE `timeTable` (
  `id` int(11) NOT NULL,
  `day` int(1) NOT NULL,
  `period1` varchar(20) NOT NULL,
  `period2` varchar(20) NOT NULL,
  `period3` varchar(20) NOT NULL,
  `period4` varchar(20) NOT NULL,
  `period5` varchar(20) NOT NULL,
  `period6` varchar(20) NOT NULL,
  `academicYear` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timeTable`
--

INSERT INTO `timeTable` (`id`, `day`, `period1`, `period2`, `period3`, `period4`, `period5`, `period6`, `academicYear`) VALUES
(31, 1, 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 2),
(32, 2, 'Tu1', 'Tu2', 'Tu3', 'Tu4', 'Tu5', 'Tu6', 2),
(33, 3, 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 2),
(34, 4, 'TH1', 'TH2', 'TH3', 'TH4', 'TH5', 'TH6', 2),
(35, 5, 'F1', 'F2', 'dgdf', 'F4', 'F5', 'F6', 2);

-- --------------------------------------------------------

--
-- Table structure for table `year_1_final`
--

CREATE TABLE `year_1_final` (
  `seat_number` int(11) NOT NULL,
  `roll_number` varchar(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `remark` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `year_1_final`
--

INSERT INTO `year_1_final` (`seat_number`, `roll_number`, `name`, `remark`) VALUES
(1, 'IEC-1', 'Aung Aung', '3D'),
(2, 'IEC-2', 'Aung La', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`tranId`);

--
-- Indexes for table `curriculum`
--
ALTER TABLE `curriculum`
  ADD PRIMARY KEY (`tranId`);

--
-- Indexes for table `finalResult`
--
ALTER TABLE `finalResult`
  ADD PRIMARY KEY (`tranId`);

--
-- Indexes for table `timeTable`
--
ALTER TABLE `timeTable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `finalResult`
--
ALTER TABLE `finalResult`
  MODIFY `tranId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timeTable`
--
ALTER TABLE `timeTable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
