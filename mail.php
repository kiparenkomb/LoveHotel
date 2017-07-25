<?php

$frm_name  = "Love Hotel";
$recepient = "kiparenkomb@gmail.com";
$sitename  = "www.love-hotel.kh.ua";
$subject   = "Новая заявка с сайта \"$sitename\"";


$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);

$message = "
<table>
	<thead style='background-color: #333;color: #fdfdfd;'>
		<tr>
			<th><a style='color:#fff;text-decoration:none;background:#fe0000;padding:10px;cursor:pointer;font-weight:700;' href='mailto:$email'>ОТВЕТИТЬ</a></th>
			<th style='padding:10px;'>Бронирование номера</th>
		</tr>
	</thead>
	<tbody>
		<tr style='background-color: #ddd;'>
			<td style='padding:10px; border: #e9e9e9 1px solid;'><b style='white-space: nowrap;'>E-mail:</b></td>
			<td style='padding:10px; border: #e9e9e9 1px solid;'>$email</td>
		</tr>
		<tr style='background-color: #ddd;'>
			<td style='padding:10px;border:#e9e9e9 1px solid;'><b style='white-space:nowrap;'>Телефон:</b></td>
			<td style='padding:10px;border:#e9e9e9 1px solid;'>$phone</td>
		</tr>
	</tbody>
</table>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n"  . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");