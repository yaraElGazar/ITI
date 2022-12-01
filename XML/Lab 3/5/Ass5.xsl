<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

<!--Task 5-->

<xsl:template match="CATALOG">
	<xsl:element name="h1">My CD Collection</xsl:element>
	<table border="1">
		<tr>
			<th style="background-color:lightgreen">Title</th>
			<th style="background-color:lightgreen">Artist</th>
			<th style="background-color:lightgreen">Price</th>

		</tr>
		<tbody>
			<xsl:for-each select="CD">
			<xsl:sort select="PRICE" order="descending" data-type="number"/>
				<tr>
					<td><xsl:value-of select="TITLE"/></td>
					<td><xsl:value-of select="ARTIST"/></td>
					<td><xsl:value-of select="PRICE"/></td>

				</tr>
			</xsl:for-each>
		</tbody>
	</table>
	
	

</xsl:template>

</xsl:stylesheet>
