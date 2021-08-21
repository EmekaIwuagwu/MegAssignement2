-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 21, 2021 at 10:46 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id17456651_test_people_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `employeeDB`
--

CREATE TABLE `employeeDB` (
  `ID` int(11) NOT NULL,
  `fullname` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `salary` decimal(18,2) NOT NULL,
  `dob` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `employeeDB`
--

INSERT INTO `employeeDB` (`ID`, `fullname`, `gender`, `email`, `salary`, `dob`) VALUES
(1, 'john walter', 'Male', 'jw@jw.org', 700000.00, '1987-08-28'),
(2, 'test', 'test', 'test@test.com', 300000.00, '2003-08-30'),
(3, 'Paul Lutherford', 'Male', 'p.lutherford@gmail.com', 900000.00, '1977-08-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employeeDB`
--
ALTER TABLE `employeeDB`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employeeDB`
--
ALTER TABLE `employeeDB`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
