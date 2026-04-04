<mxGraphModel dx="1563" dy="1000" grid="0" gridSize="12" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />
    <mxCell id="ldbhr0ORlt2X1S_eTsew-1" parent="1" style="rounded=1;whiteSpace=wrap;html=1;" value="START: App Launch" vertex="1">
      <mxGeometry height="48" width="144" x="336" y="48" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-2" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-1" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" target="ldbhr0ORlt2X1S_eTsew-3" value="">
      <mxGeometry height="50" relative="1" width="50" as="geometry">
        <mxPoint x="384" y="206" as="sourcePoint" />
        <mxPoint x="408" y="192" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-3" parent="1" style="rhombus;whiteSpace=wrap;html=1;fillColor=#F8FAFC;strokeColor=default;strokeWidth=1;" value="Is registered?" vertex="1">
      <mxGeometry height="96" width="140" x="338" y="144" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-4" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-3" style="endArrow=classic;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" target="ldbhr0ORlt2X1S_eTsew-5" value="">
      <mxGeometry height="50" relative="1" width="50" as="geometry">
        <mxPoint x="384" y="314" as="sourcePoint" />
        <mxPoint x="576" y="192" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-5" parent="1" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#EFF6FF;strokeColor=#3B82F6;" value="Input Credentials" vertex="1">
      <mxGeometry height="50" width="144" x="576" y="167" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-7" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-5" style="exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" target="ldbhr0ORlt2X1S_eTsew-8">
      <mxGeometry relative="1" as="geometry">
        <mxPoint x="648" y="240" as="sourcePoint" />
        <mxPoint x="648" y="288" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-8" parent="1" style="rhombus;whiteSpace=wrap;html=1;fillColor=#FEF2F2;strokeColor=#EF4444;" value="Attempts &amp;lt; 3?" vertex="1">
      <mxGeometry height="70" width="120" x="588" y="289" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-9" parent="1" style="shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;fixedSize=1;fillColor=#FEF2F2;strokeColor=#EF4444;" value="Cool-down Delay /&#xa;Captcha Required" vertex="1">
      <mxGeometry height="60" width="140" x="780" y="289" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-10" parent="1" style="process;whiteSpace=wrap;html=1;backgroundOutline=1;fillColor=#F1F5F9;strokeColor=#475569;rounded=1;" value="Firebase Auth&#xa;Validation" vertex="1">
      <mxGeometry height="50" width="144" x="576" y="432" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-11" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-8" style="endArrow=classic;html=1;rounded=0;entryX=0.057;entryY=0.584;entryDx=0;entryDy=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryPerimeter=0;" target="ldbhr0ORlt2X1S_eTsew-9" value="">
      <mxGeometry height="50" relative="1" width="50" as="geometry">
        <mxPoint x="612" y="362" as="sourcePoint" />
        <mxPoint x="662" y="312" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-12" edge="1" parent="1" style="entryX=0.5;entryY=0;entryDx=0;entryDy=0;" target="ldbhr0ORlt2X1S_eTsew-10">
      <mxGeometry relative="1" as="geometry">
        <mxPoint value="No" as="offset" />
        <mxPoint x="647.66" y="359" as="sourcePoint" />
        <mxPoint x="648" y="396" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-13" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;" value="Yes" vertex="1">
      <mxGeometry height="17" width="60" x="492" y="174" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-14" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;" value="No" vertex="1">
      <mxGeometry height="17" width="60" x="713" y="306" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-15" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;" value="Yes" vertex="1">
      <mxGeometry height="17" width="60" x="648" y="384" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-16" parent="1" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F8FAFC;strokeColor=#64748B;" value="Firestore Sync:&#xa;Save/Fetch Role" vertex="1">
      <mxGeometry height="60" width="144" x="576" y="564" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-17" parent="1" style="rhombus;whiteSpace=wrap;html=1;fillColor=#F8FAFC;strokeColor=#64748B;" value="IF Docter" vertex="1">
      <mxGeometry height="70" width="96" x="600" y="661" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-18" parent="1" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#DCFCE7;strokeColor=#16A34A;fontStyle=1" value="PATIENT DASHBOARD" vertex="1">
      <mxGeometry height="52" width="150" x="477" y="764" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-19" parent="1" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#DBEAFE;strokeColor=#2563EB;fontStyle=1" value="DOCTOR PORTAL" vertex="1">
      <mxGeometry height="52" width="150" x="677" y="764" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-20" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-16" target="ldbhr0ORlt2X1S_eTsew-17">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-21" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-17" style="exitX=0;exitY=0.5;exitDx=0;exitDy=0;rounded=0;curved=0;" target="ldbhr0ORlt2X1S_eTsew-18">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="552" y="696" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-22" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-17" style="exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.445;entryY=-0.008;entryDx=0;entryDy=0;entryPerimeter=0;rounded=0;curved=0;" target="ldbhr0ORlt2X1S_eTsew-19">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="744" y="696" />
        </Array>
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-23" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-10" style="endArrow=classic;html=1;rounded=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" target="ldbhr0ORlt2X1S_eTsew-16" value="">
      <mxGeometry height="50" relative="1" width="50" as="geometry">
        <mxPoint x="624" y="506" as="sourcePoint" />
        <mxPoint x="674" y="456" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-24" edge="1" parent="1" style="entryX=0.5;entryY=0;entryDx=0;entryDy=0;rounded=0;curved=0;" target="ldbhr0ORlt2X1S_eTsew-25">
      <mxGeometry relative="1" as="geometry">
        <mxPoint value="Register" as="offset" />
        <Array as="points">
          <mxPoint x="240" y="192" />
        </Array>
        <mxPoint x="338" y="191.5" as="sourcePoint" />
        <mxPoint x="240" y="192" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-25" parent="1" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F0FDFA;strokeColor=#10B981;" value="Select Role:&#xa;Patient vs Doctor" vertex="1">
      <mxGeometry height="50" width="140" x="170" y="240" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-26" parent="1" style="rhombus;whiteSpace=wrap;html=1;fillColor=#F8FAFC;strokeColor=#64748B;" value="Is Doctor?" vertex="1">
      <mxGeometry height="60" width="100" x="190" y="329" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-27" parent="1" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F0FDFA;strokeColor=#10B981;" value="Input SLMC ID" vertex="1">
      <mxGeometry height="50" width="96" x="12" y="334.5" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-28" parent="1" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F0FDFA;strokeColor=#10B981;" value="Fill Profile Details&#xa;(Name, Email, Pass)" vertex="1">
      <mxGeometry height="50" width="140" x="170" y="448" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-29" parent="1" style="rhombus;whiteSpace=wrap;html=1;fillColor=#FFF7ED;strokeColor=#F97316;" value="Agree to Privacy&#xa;Policy &amp; Terms?" vertex="1">
      <mxGeometry height="90" width="120" x="180" y="531" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-30" parent="1" style="ellipse;whiteSpace=wrap;html=1;fillColor=#F1F5F9;strokeColor=#475569;" value="EXIT / DENIED" vertex="1">
      <mxGeometry height="50" width="80" x="200" y="720" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-31" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-25" target="ldbhr0ORlt2X1S_eTsew-26">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-32" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-26" target="ldbhr0ORlt2X1S_eTsew-27">
      <mxGeometry relative="1" as="geometry">
        <mxPoint value="Yes" as="offset" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-33" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-26" target="ldbhr0ORlt2X1S_eTsew-28">
      <mxGeometry relative="1" as="geometry">
        <mxPoint value="No" as="offset" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-34" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-27" style="entryX=0;entryY=0.5;entryDx=0;entryDy=0;rounded=0;curved=0;" target="ldbhr0ORlt2X1S_eTsew-28">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="60" y="473" />
        </Array>
        <mxPoint x="134" y="450.5" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-35" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-28" target="ldbhr0ORlt2X1S_eTsew-29">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-36" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-29" target="ldbhr0ORlt2X1S_eTsew-30">
      <mxGeometry relative="1" as="geometry">
        <mxPoint value="Rejected" as="offset" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-37" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;" value="No" vertex="1">
      <mxGeometry height="17" width="60" x="252" y="174" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-38" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;gradientColor=none;" value="Yes" vertex="1">
      <mxGeometry height="17" width="60" x="120" y="342" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-39" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;" value="No" vertex="1">
      <mxGeometry height="17" width="60" x="240" y="389" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-40" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-29" style="endArrow=classic;html=1;rounded=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" target="ldbhr0ORlt2X1S_eTsew-10" value="">
      <mxGeometry height="50" relative="1" width="50" as="geometry">
        <Array as="points">
          <mxPoint x="432" y="576" />
          <mxPoint x="432" y="456" />
        </Array>
        <mxPoint x="384" y="566" as="sourcePoint" />
        <mxPoint x="434" y="516" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-41" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;gradientColor=none;" value="Yes" vertex="1">
      <mxGeometry height="17" width="60" x="371" y="558" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-42" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;" value="No" vertex="1">
      <mxGeometry height="17" width="60" x="241" y="664" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-43" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;gradientColor=none;" value="Yes" vertex="1">
      <mxGeometry height="17" width="60" x="708" y="681" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-44" parent="1" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=#CCFFFF;align=center;verticalAlign=middle;rounded=0;" value="No" vertex="1">
      <mxGeometry height="17" width="60" x="528" y="681" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-45" parent="1" style="rounded=1;whiteSpace=wrap;html=1;" value="END" vertex="1">
      <mxGeometry height="48" width="120" x="593" y="900" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-46" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-30" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" target="ldbhr0ORlt2X1S_eTsew-45" value="">
      <mxGeometry height="50" relative="1" width="50" as="geometry">
        <Array as="points">
          <mxPoint x="240" y="924" />
        </Array>
        <mxPoint x="480" y="902" as="sourcePoint" />
        <mxPoint x="530" y="852" as="targetPoint" />
      </mxGeometry>
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-49" parent="1" style="strokeWidth=1;html=1;shape=mxgraph.flowchart.annotation_1;align=left;pointerEvents=1;rotation=-90;" value="" vertex="1">
      <mxGeometry height="222" width="50" x="625" y="731" as="geometry" />
    </mxCell>
    <mxCell id="ldbhr0ORlt2X1S_eTsew-50" edge="1" parent="1" source="ldbhr0ORlt2X1S_eTsew-49" style="endArrow=classic;html=1;rounded=0;entryX=0.458;entryY=-0.006;entryDx=0;entryDy=0;entryPerimeter=0;exitX=-0.004;exitY=0.491;exitDx=0;exitDy=0;exitPerimeter=0;" target="ldbhr0ORlt2X1S_eTsew-45" value="">
      <mxGeometry height="50" relative="1" width="50" as="geometry">
        <mxPoint x="648" y="876" as="sourcePoint" />
        <mxPoint x="626" y="888" as="targetPoint" />
      </mxGeometry>
    </mxCell>
  </root>
</mxGraphModel>
