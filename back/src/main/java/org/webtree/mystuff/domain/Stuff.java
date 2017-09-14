package org.webtree.mystuff.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.Accessors;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_EMPTY;

@Data
@Builder
@Accessors(chain = true)
@NodeEntity
@JsonInclude(NON_EMPTY)
public class Stuff {
    @GraphId
    private Long id;
    private String name;
}