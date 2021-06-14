-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2021 at 07:10 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_user`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id`, `username`, `password`, `nama`) VALUES
(1, 'admin', '$2y$10$Ps494OaGimy1pxsx7K5hEeGrIxu885guWRjeq.P5M/tex/S3OtEzC', 'arita'),
(2, 'aku', '$2y$10$D/aQC/ysv03p5q4fjXQQSuFpqYv7MJZDnOLywzJog5mTDL8VAYeZm', 'aku'),
(3, 'adm', '$2y$10$cnUDodQ5uYxYjr20UISgv.hjGE8ONYPreeohxCg1eXgr6C6zy8Q..', 'adm'),
(4, 'akoo', '$2y$10$n8fFimBP4vxIRbiNftmKtOCOIslrkK5cWHVq7dKPam03MRht.YKsi', 'akoo'),
(5, 'aq', '$2y$10$jEjn1ICLRgv99KewbyNpJegbdx1npT.36YFpchSOEpXHZCbSR8s5a', 'aq'),
(6, 'fitri', '$2y$10$PEK5SY8DNH4RYbesPP.QD.40avX5TMDclU7hX/u5/suOzntMSvEhy', 'fitri'),
(7, 'ning', '$2y$10$Q5VN9MTlm332C.bnLmy0Su8xlMmy9BUnAZL3NRO4BZigAzwENKpCm', 'ning'),
(8, 'asd', '$2y$10$yzcPGeiRFrw5nLQ.7wJ5RuKvlkPEFtgYBfwsQyl4OEUfwI2Cia7..', 'asd'),
(10, 'afg', '$2y$10$wPe9u0fI/79qlv7QFXMgMu6NZAYkhPiJuUg6rZa0mvbIGJeellppO', 'afg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
