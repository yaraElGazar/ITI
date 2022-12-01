<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

<!--Task 2-->

<xsl:template match="books">
<xsl:element name="h1">A List of Books</xsl:element>
	<table border="1">
		<tr>
			<th>Author</th>
			<th>Title</th>
			<th>Price</th>
		</tr>
	<tbody>	
		<xsl:for-each select="book">
			<tr>
				<td><xsl:value-of select="author"/></td>
				<td><xsl:value-of select="title"/></td>
				<td><xsl:value-of select="price"/></td>
			</tr>	
		</xsl:for-each>
	</tbody>
	</table>

</xsl:template>
</xsl:stylesheet>


