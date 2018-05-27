-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 27, 2018 at 03:58 PM
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
  `period` int(1) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `academicYear` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timeTable`
--

INSERT INTO `timeTable` (`id`, `day`, `period`, `subject`, `academicYear`) VALUES
(1, 1, 1, 'EcE 5014', '1'),
(2, 1, 2, 'EcE 5014', '1'),
(3, 1, 3, 'EcE 5014', '1'),
(4, 1, 4, 'EcE 5015', '1'),
(5, 1, 5, 'EcE 5015', '1'),
(6, 1, 6, 'EcE 5015', '1'),
(7, 2, 1, 'EcE 5014', '1'),
(8, 2, 2, 'EcE 5011', '1'),
(9, 2, 3, 'EcE 5011', '1'),
(10, 2, 4, 'EcE 5015', '1'),
(11, 2, 5, 'EcE 5015', '1'),
(12, 2, 6, 'EcE 5016', '1'),
(13, 3, 1, 'EcE 5012', '1'),
(14, 3, 2, 'EcE 5012', '1'),
(15, 3, 3, 'EcE 5012', '1'),
(16, 3, 4, 'EcE 5013', '1'),
(17, 3, 5, 'EcE 5013', '1'),
(18, 3, 6, 'EcE 5013', '1'),
(19, 4, 1, 'EcE 5011', '1'),
(20, 4, 2, 'EcE 5011', '1'),
(21, 4, 3, 'EcE 5024', '1'),
(22, 4, 4, 'EcE 5023', '1'),
(23, 4, 5, 'EcE 5023', '1'),
(24, 4, 6, 'EcE 5023', '1'),
(25, 5, 1, 'EcE 5023', '1'),
(26, 5, 2, 'EcE 5023', '1'),
(27, 5, 3, 'EcE 5012', '1'),
(28, 5, 4, 'EcE 5024', '1'),
(29, 5, 5, 'EcE 5024', '1'),
(30, 5, 6, 'EcE 5024', '1');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
