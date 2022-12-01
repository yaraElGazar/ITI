<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

<!--Task 6-->

<xsl:template match="CATALOG">
	<xsl:element name="h1">My CD Collection</xsl:element>
	<table border="1">
		<tr>
			<th style="background-color:lightgreen">Title</th>
			<th style="background-color:lightgreen">Artist</th>

		</tr>
		<tbody>
			<xsl:for-each select="CD">
				<xsl:choose>
					<xsl:when test="PRICE>10">
						<tr>
							<td><xsl:value-of select="TITLE"/></td>
							<td style="background-color:red"><xsl:value-of select="ARTIST"/></td>
						</tr>
					</xsl:when>
					
					<xsl:otherwise>
						<tr>
							<td><xsl:value-of select="TITLE"/></td>
							<td style="background-color:green"><xsl:value-of select="ARTIST"/></td>
						</tr>
					</xsl:otherwise>
				</xsl:choose>
				
			</xsl:for-each>
		</tbody>
	</table>
	
	

</xsl:template>


</xsl:stylesheet>
