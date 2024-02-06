-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2018 at 01:58 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itp`
--

-- --------------------------------------------------------

--
-- Table structure for table `audit`
--

CREATE TABLE `audit` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `actname` text NOT NULL,
  `actby` int(11) NOT NULL,
  `prev` varchar(100) NOT NULL,
  `actdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `audit`
--

INSERT INTO `audit` (`id`, `category`, `actname`, `actby`, `prev`, `actdate`) VALUES
(1, 'task', 'Add new task', 4, 'MANAGER', '2018-09-26 03:59:20'),
(2, 'task', 'Add new task for Try Audit Trail', 4, 'MANAGER', '2018-09-26 04:53:56'),
(3, 'task', 'Add new task for Qweqweqwe', 4, 'MANAGER', '2018-09-26 05:08:24'),
(4, 'task', 'Add new task for Qweqwe', 4, 'MANAGER', '2018-09-26 05:10:12'),
(5, 'task', 'Add new task for Qwqwe', 4, 'MANAGER', '1970-01-01 01:00:00'),
(6, 'task', 'Add new task for Asdqwdqw', 4, 'MANAGER', '2018-09-26 05:17:10'),
(7, 'task', 'Add new task for Qweqwe', 4, 'MANAGER', '2018-09-26 05:20:22'),
(8, 'task', 'Add new task for Qweqwe', 4, 'MANAGER', '2018-09-26 11:33:29'),
(9, 'task', 'Add new task for Asd', 1, 'ADMIN', '2018-09-26 13:11:21'),
(10, 'task', 'Add new task for Qwe', 4, 'MANAGER', '2018-09-26 15:39:32'),
(11, 'task', 'Add new task for Try ', 4, 'MANAGER', '2018-09-26 15:41:21'),
(12, 'useracc', 'Account login', 1, 'ADMIN', '2018-09-26 16:08:38'),
(13, 'useracc', 'Account login', 1, 'ADMIN', '2018-09-26 16:09:28'),
(14, 'useracc', 'Account login', 1, 'ADMIN', '2018-09-26 16:10:07'),
(15, 'task', 'Task doned for Try ', 56, 'EMP', '2018-09-26 17:43:48'),
(16, 'task', 'Task doned for Try Audit Trail', 56, 'EMP', '2018-09-26 17:44:05'),
(17, 'task', 'Task approved for Try ', 1, 'ADMIN', '2018-09-26 17:45:37'),
(18, 'task', 'Add new task for Mark Jenrick Siquihod', 4, 'MANAGER', '2018-09-26 23:25:16'),
(19, 'task', 'Add new task for Bill Gates', 4, 'MANAGER', '2018-09-26 23:53:53'),
(20, 'task', 'Add new task for Pepe Pacheco', 4, 'MANAGER', '2018-09-27 18:00:11'),
(21, 'task', 'Add new task for Felimon Abogado', 4, 'MANAGER', '2018-09-27 19:13:56');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `cell` varchar(100) NOT NULL,
  `serv` varchar(100) NOT NULL,
  `size` varchar(225) NOT NULL,
  `attach` varchar(225) NOT NULL,
  `addet` text NOT NULL,
  `expdate` datetime NOT NULL,
  `dp` int(11) NOT NULL,
  `tp` int(11) NOT NULL,
  `remarks` text NOT NULL,
  `status` int(1) NOT NULL,
  `started` datetime NOT NULL,
  `remday` int(11) NOT NULL,
  `finish` datetime NOT NULL,
  `branch` int(11) NOT NULL,
  `adname` int(11) NOT NULL,
  `empname` int(11) NOT NULL,
  `dndate` datetime NOT NULL,
  `quan` int(11) NOT NULL,
  `nodesign` int(11) NOT NULL,
  `aprvdby` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `name`, `cell`, `serv`, `size`, `attach`, `addet`, `expdate`, `dp`, `tp`, `remarks`, `status`, `started`, `remday`, `finish`, `branch`, `adname`, `empname`, `dndate`, `quan`, `nodesign`, `aprvdby`) VALUES
(1, 'Mark Jenrick Siquihod', '09472717863', '1', '3x2', '5baba4dc5bcc08.57447760.rar', 'hahahhaa', '2018-09-27 17:23:00', 750, 1500, '', 1, '2018-09-26 23:25:16', 0, '0000-00-00 00:00:00', 1, 1, 2, '0000-00-00 00:00:00', 10, 0, 0),
(2, 'Bill Gates', '09567956362', '1', '3x2', '5babab9117ae87.87830262.rar', 'try', '2018-09-27 00:00:00', 150, 300, '', 1, '2018-09-26 23:53:53', 0, '0000-00-00 00:00:00', 1, 1, 62, '0000-00-00 00:00:00', 1, 150, 0),
(3, 'Pepe Pacheco', '09567956362', '1', '3x2', '5bacaa2b134987.31300781.rar', 'hahahaha', '2018-09-27 18:05:00', 150, 300, '', 1, '2018-09-27 18:00:11', 0, '0000-00-00 00:00:00', 1, 1, 58, '0000-00-00 00:00:00', 1, 150, 0),
(4, 'Felimon Abogado', '09076515735', '1', '3x2', '5bacbb748c2303.38016265.rar', 'kelangan natin to titi', '2018-09-28 17:00:00', 7575, 15150, '', 1, '2018-09-27 19:13:56', 0, '0000-00-00 00:00:00', 1, 1, 5, '0000-00-00 00:00:00', 100, 150, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uname` text NOT NULL,
  `pass` text NOT NULL,
  `fname` varchar(225) NOT NULL,
  `prev` varchar(50) NOT NULL,
  `con` varchar(50) NOT NULL,
  `branch_id` int(4) NOT NULL,
  `credate` datetime NOT NULL,
  `path` varchar(225) NOT NULL,
  `status` int(1) NOT NULL,
  `ischange` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uname`, `pass`, `fname`, `prev`, `con`, `branch_id`, `credate`, `path`, `status`, `ischange`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Rubenson A. Nieves', 'ADMIN', '09472717863', 1, '2018-07-23 04:02:34', '', 1, 1),
(2, 'emp', 'ac8be4aee61f5f6e21b8c5afffb52939', 'Felimon R. Abogado', 'EMP', '09472717863', 1, '2018-08-05 20:20:19', '', 1, 1),
(4, 'manager', '1d0258c2440a8d19e716292b231e3190', 'Junaid Pangan', 'MANAGER', '09472717863', 0, '2018-08-06 16:06:00', '', 1, 1),
(5, 'emp1', '86ea3363ba65c10f3f1ef299b126de29', 'Mark Jenrick M. Siquihod', 'EMP', '09472717863', 1, '2018-08-08 08:03:42', '', 1, 1),
(6, 'emp2', '41ab3465e911f91509d3fae308f41f76', 'Gerald R. Obida', 'EMP', '09472717863', 2, '2018-08-08 08:03:42', '', 1, 1),
(7, 'admin1', 'e00cf25ad42683b3df678c61f42c6bda', 'Rolando E. Macalanda', 'ADMIN', '09472717863', 2, '2018-08-08 10:44:16', '', 1, 1),
(8, 'admin2', 'c84258e9c39059a89ab77d846ddab909', 'Mark Cobain Rabacca', 'ADMIN', '09472717863', 3, '2018-08-08 10:44:16', '', 1, 1),
(56, 'emperor_meijin', '2dc306f3e89c9bf2048ab569f55dbc23', 'Michael John Siquihod', 'EMP', '09472717863', 1, '2018-09-05 00:20:24', '5b8eb0c870e401.30682885.jpg', 1, 1),
(57, 'markjenrick', 'c986c106f3c38b8287d424dbb735466c', 'Mark Jenrick Siquihod', 'EMP', '09472717863', 4, '2018-09-05 20:30:49', '5b8fcc79b47e49.43093991.jpg', 1, 1),
(58, 'arongjudyann', '4313278e4f1606f755e7022306c56dcc', 'Judy Ann Arong', 'EMP', '09472717863', 1, '2018-09-05 20:40:30', '5b8fcebe8ee540.45521313.jpg', 1, 1),
(60, 'emp4', '4e2750e6d36e8e7ed970ee705ada5c8f', 'Teofilo Coloquit', 'EMP', '09472717863', 4, '2018-09-05 22:21:45', '5b8fe679934a48.84055388.jpg', 1, 1),
(61, 'admin4', 'fc1ebc848e31e0a68e868432225e3c82', 'Christian Villan', 'ADMIN', '09567956362', 4, '2018-09-22 11:43:59', '5ba5ba7f54dd05.20025668.png', 0, 0),
(62, 'hanzpogi', '72736a1ff138c48982adf487d2a91bf1', 'Hanz Sadia', 'EMP', '09650637095', 1, '2018-09-22 12:17:32', '5ba5c25cc8bb84.42384283.jpg', 0, 0),
(63, 'shielaaraja', 'db46d5ddb2dc87f85bb5fc963334416d', 'Sheila Marie Araja', 'EMP', '09567956362', 3, '2018-09-26 00:40:04', '5baa64e4d11503.50311938.jpg', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audit`
--
ALTER TABLE `audit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audit`
--
ALTER TABLE `audit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
